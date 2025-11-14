// import Header from '../components/Title'
import Title from '../components/Title';
import About from '../components/About'
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills' ;
import FormContact from '../components/FormContact' ;
import Footer from '../components/Footer';
 function Home() {
  return (
    <div>
       <main>
        
           <Title/>

           <section id="about">
             <About/>
           </section>
          
          <section id="project">
           <ProjectCard/>
          </section>
          
          
           <Skills/>

           <section id="contact">
             <FormContact/>
           </section>
          
          
       </main>
        <Footer/>
    </div>
  );
}
export default Home
