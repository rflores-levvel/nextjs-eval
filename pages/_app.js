import '../styles/index.css'
import {Nav, Footer} from '../components/tailwindui/'

function App({ Component, pageProps }) {

  
  return (
    <>
      <Nav />
      
      <Component {...pageProps} />
      
      <Footer />
      
      <style jsx global>{`
        :root {
          --bg-color: white;
          --primary-color:  rgb(113, 128, 150);
          --secondary-color: black;
          --link-color: blue;
        }

        [data-theme="dark"] {
          --bg-color: #121212;
          --primary-color: #8999b0;
          --secondary-color: #f4f4f6;
          --link-color: red; 
        }

        body {
          background: var(--bg-color);
          transition: background 0.5s;
          color: var(--primary-color);
        }

        a {
          color: var(--link-color);
        }
        
        p {
          color: var(--primary-color);
        }

        h1 {
          color: var(--primary-color);
        }

        h3 {
          color: var(--secondary-color);
        }
      `}</style>
    </>
  )
}

export default App
