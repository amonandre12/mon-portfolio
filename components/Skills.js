// The skills content ;

'use client';
import Lottie from 'lottie-react';

// Importation directe des fichiers JSON
import htmlAnim from '../public/Untitled file html.json';
import jsAnim from '../public/Untitled file script.json';
import reactAnim from '../public/Untitled file React.json';
import nextAnim from '../public/Untitled file.json';
import figmaAnim from '../public/Untitled file figma.json';

import '../styles/skills.css';

const animations = [
  { id: 1, src: htmlAnim, title: 'HTML5 & CSS3' },
  { id: 2, src: jsAnim, title: 'JAVASCRIPT (ES6+)' },
  { id: 3, src: reactAnim, title: 'REACT.JS' },
  { id: 4, src: nextAnim, title: 'NEXT.JS' },
  { id: 5, src: figmaAnim, title: 'FIGMA' },
];

function Skills() {
  return (
    <section className = 'skills-section'>
      <h1 style={{color: 'hsl(243, 96%, 9%)' , textAlign:'center'}}>Mes compétences</h1>
        <div  className="skills_content">
           {animations.map((anim) => (
          <div key={anim.id} className='animation'>
            <Lottie animationData={anim.src} loop = {true}
            className='lottie' /> <br/>
            <h3>{anim.title}</h3>
          </div>
        ))}
        </div>
    </section>
  );
}

export default Skills;
