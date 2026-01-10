// The footer content 
//The importation next link
import Link from 'next/link';
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

            <Link href={mailtoLink}>
            <i className="fa-solid fa-envelope"></i>
            </Link>
            
            <Link href="https://github.com/amonandre12" >
            <i className="fa-brands fa-github"></i>
            </Link>
            
            <Link href="https://www.linkedin.com/in/blin-wadja-andré-amon-00050a337/">
               <i className ="fab fa-linkedin-in"></i>
              </Link>
            </div>

            <div>
               <p style = {{color : 'white' , fontSize : '14px'}}>&copy; {new Date().getFullYear()}  Blin Wadja André tous droits réservés.</p>
            </div>
            </section>
        </footer>
    )
}
export default Footer