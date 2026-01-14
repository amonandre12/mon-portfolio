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
                        alt = 'logo du site'
                        height = {90}
                        width = {90}
                        />
                    </div>

            <div className = 'para_p'>
                <p>
                   Développeur front-end freelance, je conçois et développe des interfaces web modernes, rapides et adaptées aux besoins réels des entreprises.
                </p>

                <p>
                    J’accompagne startups, entreprises et indépendants dans la création de sites et applications web 
                    performants, en mettant l’accent sur l’expérience utilisateur, la qualité du code et le respect des 
                    maquettes.
                </p>

                <p>
                    Spécialisé en <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>React</strong> et <strong>Next.js</strong>, je transforme des designs en interfaces
                    fonctionnelles, responsives et optimisées, tout en respectant les bonnes pratiques du développement 
                    front-end.
                </p>

                <p>
                    En tant que freelance, je privilégie une collaboration claire, une communication fluide et un travail soigné. 
                    Mon objectif est de livrer des solutions fiables, maintenables et prêtes à évoluer.
                </p>

                <p>👉 Disponible pour des missions freelance en développement front-end. </p>
            </div>
            </div>

            <div className = "btn-cv">
                <a href="/cv_blin_wadja_andre.pdf" download className="cv-btn">
               Télécharger mon CV
               </a>
            </div>
        </div>
        </section>
    )
}

export default About