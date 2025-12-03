// The footer content 
//The importation next link
import Link from 'next/link';
import Image from 'next/image';
import '../styles/footer.css';
const myEmailAddress = "mailto:amonblinwadjaandre@gmail.com";
const subject = "Opportunité de collaboration via votre portfolio";
const body = encodeURIComponent("Bonjour Andre, je souhaite collaborer avec vous sur un projet web.");
const mailtoLink = `mailto:${myEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
function Footer() {
    return(
         <footer>
          <section>

           
            <div className = 'contact_group'>
             <div>
               
               <Link href={mailtoLink}>
               <Image
               height= {40}
               width = {40}
               src = '/3916611.png'
               alt= 'une image de mail'
               />
               </Link>
             </div>

             <div>
               <Link href="https://github.com/amonandre12">
               <Image
               height= {40}
               width = {40}
               src = '/6424084.png'
               alt= 'une image de github'
               />
               </Link>
             </div>

             <div>
               <Link href="https://www.linkedin.com/in/blin-wadja-andré-amon-00050a337/">
               <Image
               height= {40}
               width = {40}
               src = '/6422202.png'
               alt= 'une image de linkdln'
               />
               </Link>
             </div>
            
            </div>
                <p style = {{color : 'white' , fontSize : '14px'}}>&copy; {new Date().getFullYear()}  Blin Wadja André tous droits réservés.</p>
            </section>
        </footer>
    )
}
export default Footer