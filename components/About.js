// The text component 
import Image from 'next/image' ; 
import '../styles/about.css'

function About() {

    return (
            <section className = 'content_about'>
          
            <div className= "paragraph">
                
             <h2 className='about'>A  propos de moi </h2> 

       <div className = 'container_para'>
           <div>
            <Image 
             src = '/logo.jpg'
             alt = 'logo dus site'
             height = {120}
             width = {120}
            />
          </div>

            <div className = 'para_p'>
            
                 <p>Bonjour, je suis Blin Wadja André, Développeur Front-End.</p> <br/>
                
                <p>Passionné par le web depuis plusieurs années, j'ai choisi de me former en autodidacte au 
                 développement front-end.
                 Au fil du temps, j'ai acquis de solide bases en HTML5, CSS3,  JavaScript(ES6+) avant 
                 de me spécialiser dans des frameworks modernes comme  React.js et Next.js</p> 

                <p> J'aime particulièrement transformer une idée oun une maquette en site fluide, responsive et professionel. 
                 Chaque projet est pour moi l'occasion d'allier créativité, logique et precision du code pour offrir 
                 une experience utilisateur agréable et moderne. </p> 

                <p> Mon objectif est de continuer à progresser, à relever de nouveaux défis et à collaborer avec 
                 des entreprises qui souhaitent un site web claire, rapide et bien conçu. </p>
            
            </div>
            </div>
        </div>

        </section>
    )
}

export default About