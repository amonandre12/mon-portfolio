import "./global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from '../components/Nav'

export default function RootLayout({ children }) {
  return (
    <html  lang="en" suppressHydrationWarning>
      <body>
         <Nav/>
        {children}
      </body>
    </html>
  );
}
