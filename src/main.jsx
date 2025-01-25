import { createRoot } from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@fontsource/poppins";
import '@fontsource-variable/cairo/slnt.css';
import './index.css'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'
createRoot(document.getElementById('root')).render(
    <HelmetProvider>
    <App />
    </HelmetProvider>
)
