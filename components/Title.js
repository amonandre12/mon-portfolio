// The title component
'use client'
import { useEffect , useState } from 'react';
import '../styles/Title.css'

function Title () {
    const [visible , setVisible] = useState(false) ;
   
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true) ;
        }, 3) ; 

        return() => clearTimeout(timer)
    }, [] )

    return (
        <div className = 'title_content'>
            <div className = 'background'> 

                <div className={`paragraphs ${visible ? 'is-visible' : ''}`}>
                      <h1> BLIN  WADJA  ANDRE </h1>
                </div>
                
                <div className={`paragraphs ${visible ? 'is-visible' : ''}`}>
                  <p className='title'> Développeur Web Front-End </p>
                </div>
                
                <div className={`paragraphs ${visible ? 'is-visible' : ''}`}>
                    <h4 className='creation'>Création moderne et responsive pour le web</h4>
                </div>
              </div> 
        </div>
    )
}
export default Title 