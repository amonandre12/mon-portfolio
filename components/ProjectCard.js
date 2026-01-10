'use client'
import {useState , useEffect} from 'react' ;
import {products} from '../data/cards';
import Image from 'next/image' ;
import Link from 'next/link' ;
import  '../styles/projects.css'; 
 

function ProjectCard () {
     // État pour stocker l'ID du produit sélectionné pour la modale
     const [selectedProductId, setSelectedProductId] = useState(null);
     const [isModalOpen, setIsModalOpen]  = useState(false) ; //Nouvel state pour animation

      // Trouver le produit sélectionné pour l'affichage de la modale
      const selectedProduct = products.find((p) => p.id === selectedProductId)
    
     // Fonction pour ouvrir la modale avec animation
    const openModal = (productId) => {
        setSelectedProductId(productId);
        setIsModalOpen(true);
    };

     // Fonction pour fermer la modale avec animation (important)
    const closeModal = () => {
        setIsModalOpen(false);
    
        setTimeout(() => setSelectedProductId(null), 300);
    };
    
    return (
    <>
    <h1 className='projects'> Mes Réalisations</h1>
    <section className = 'projects_content'>
        <div className = "projects1">

         {products.map((product) => (
        <div key = {product.id} className = "myProjects">
        
        <div>
         <Image
         src = {product.imagePath}
         alt = {product.alt}
         height = {190}
         width = {240}
         /> 
        </div>

         <h3>{product.title}</h3> 
         
        <div>
             {/* Bouton qui ouvre la modale en définissant l'ID sélectionné */}
            
            <button  className = 'btn_learn' onClick={() => openModal(product.id)}>
             Voir les détails
            </button>
        </div>
        
        </div>
    ))}
    </div>
    </section>

    {/* --- LA MODALE --- */}
    
    {selectedProduct && (
        <div className={`modal-overlay ${isModalOpen ? 'is-open' : 'is-closed'}`}
         onClick={closeModal}
        >
            <div className={`modal-content ${isModalOpen ? 'is-open' : 'is-closed'}`}
             onClick={(e) => e.stopPropagation()} 
            >
                 <Image
                    src={selectedProduct.imagePath}
                    alt={selectedProduct.alt}
                    width={270}
                    height={170}
                />


                 <p style = {{color : 'black'}}>{selectedProduct.description}</p>

                  {/* les technologies utilisées  */}
                <div className = "skill_styles">
                    <button>
                        {selectedProduct.react}
                    </button>

                    <button>
                        {selectedProduct.next}
                    </button>

                    <button>
                        {selectedProduct.figma}
                    </button>
                </div>
                
                {/* Le lien du projet */}
                <div className = "link">
                <Link href = {selectedProduct.link} className = "btn_project">Voir le projet</Link> 
               </div>

                {/* Bouton pour fermer la modale (réinitialise l'état à null) */}
                <div onClick={closeModal} className = 'btn_back'>
                    <Image 
                    src = '/3917759.png'
                    alt = 'The back button'
                    width = {20}
                    height= {20}
                    />
                </div>
            </div>
        </div>
    )}
     </>
    )
}
export default ProjectCard