import "./global.css";
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
