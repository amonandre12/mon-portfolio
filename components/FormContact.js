'use client';
import { useState, useRef } from "react"; // Importez useRef
import { sendMessage } from "../app/actions/sendMessage"; 
import '../styles/Form.css';
import { useFormStatus } from "react-dom"; // Pour un bouton de chargement

// Composant dédié pour le bouton d'envoi
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn_send" disabled={pending}>
      {pending ? "Envoi en cours..." : "Me contacter"}
    </button>
  );
}

function FormContact() {
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('');
  // Utilisez useRef pour cibler le formulaire afin de pouvoir le réinitialiser
  const formRef = useRef(null); 

  // La fonction 
  async function handleSubmit(formData) {
    
    const result = await sendMessage(formData);

    if (result.success) {
      setColor('green');
      // Réinitialise le formulaire seulement si l'envoi a réussi
      formRef.current?.reset(); 
    } else {
      setColor('red');
    }
    
    setStatus(result.message);

    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div className="form_section">
      <div className="call_action">
        <h2>Travaillons Ensemble !</h2>
        <p>
          Intéressé par mes projets ou désireux de collaborer sur une
          nouvelle idée ? N'hésitez pas à me contacter via le formulaire
          ci-dessous.
        </p>
      </div>

      {/* Liez la référence et la nouvelle fonction handleSubmit à l'action */}
      <form ref={formRef} className="contact_form" action={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name" 
            required
            placeholder="Entrez votre nom"
            
          />
        </div>

        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email" 
            required
            placeholder="Entrez votre email"
            
          />
        </div>

        <div className="form_group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message" 
            placeholder="Tapez votre message"
            
          ></textarea>
        </div>

        <div>
          <SubmitButton /> 
        </div>

        {status && <p style={{ color: color, fontSize: "23px" }}>{status}</p>}
      </form>
    </div>
  );
}

export default FormContact;
