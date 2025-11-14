'use server';

import nodemailer from "nodemailer";

export async function sendMessage(formData) {
  const name = formData.get("name");  
  const email = formData.get("email"); 
  const message = formData.get("message"); 

  if (!name || !email || !message) {
    return { success: false, message: "Veuillez entrer tous les champs !" };
  }

  const transporter = nodemailer.createTransport({
    // Configuration manuelle robuste pour éviter ETIMEOUT
    host: "smtp.gmail.com", 
    port: 465,             
    secure: true,          
    auth: {
      user: process.env.EMAIL_USER, // <-- VOTRE email pour vous authentifier
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    // L'e-mail semble provenir de vous-même, pour des raisons de sécurité
    from: `Portfolio Contact Form <${process.env.EMAIL_USER}>`, 
    
    // <-- LE DESTINATAIRE EST TOUJOURS VOUS-MÊME -->
    to: process.env.EMAIL_USER, 
    
    subject: `Nouveau message de votre portfolio | De: ${name}`, 
    
    html: `
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    
    // <-- Cela permet de répondre au visiteur directement depuis votre boîte mail -->
    replyTo: email 
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message envoyé !");
    return { success: true, message: "Message envoyé avec succès ✅ !" };

  } catch (error) {
    console.error("Erreur lors de l’envoi :", error);
    return { success: false, message: "Erreur lors de l’envoi du message ❌" };
  }
}