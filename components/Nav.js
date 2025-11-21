// The menu navigation component
'use client';
import {useState} from 'react';
import Image from "next/image" ; 
import Link from 'next/link'
import '../styles/nav.css'

function Navigation() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
    return (

        <div className = 'navigation'>

             <div className = "content">
                    <div className="logo">
                            
                        <Image 
                         src = '/logo.jpg'
                         alt = 'logo dus site'
                         height = {120}
                         width = {120}
                        />
                    </div>
                </div>
            
            <div>
                <div  onClick={() => setIsMenuOpen(!isMenuOpen)} className = 'menu '>
                     <Image 
                         src = '/menu.png'
                         alt = 'logo dus site'
                         height = {25}
                         width = {25}
                        />
                </div> 
                
                {/* The links group  */}
                

                <nav  className = {`links ${isMenuOpen ? 'open' : ''}`}> 
                
                  {/* <div className = 'nav-links'> */}
                  <div onClick={() => setIsMenuOpen(!isMenuOpen)} className= 'back-cross'>
                  <Image 
                    src = '/3917759.png'
                    alt = 'The back button'
                    width = {20}
                    height= {20}
                    />
                  </div>
                 <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>Accueil</Link>
                  <Link href="#about"onClick={() => setIsMenuOpen(!isMenuOpen)}>À  propos</Link>
                 <Link href="#project" onClick={() => setIsMenuOpen(!isMenuOpen)}>Projets</Link>
                  <a href="#contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</a>
                   {/* </div> */}


                    {/* Le bouton burger/croix qui gère l'ouverture/fermeture */}
               </nav>
              
            </div>
           
           
        </div>
    )
}
export default Navigation