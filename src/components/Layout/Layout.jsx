import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
export default function Layout() {
    return <>
        <Navbar />
        <a tabIndex={0} href="https://api.whatsapp.com/send/?phone=966508137522&text&app_absent=0" target="_blank" className="z-50 w-10 h-10 sm:w-12 sm:h-12 bg-[#075E54] bg-opacity-85 hover:bg-opacity-100 transition-colors duration-300 fixed bottom-5 right-5 flex justify-center items-center rounded-full">
            <span className="text-white transition-transform duration-200"><WhatsAppIcon sx={{fontSize:"27px"}}/></span>
        </a>
        <a tabIndex={0} href="tel:+966542683288" className="z-50 w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-90 hover:bg-opacity-100 transition-colors duration-300 fixed bottom-5 left-5 flex justify-center items-center rounded-full">
            <span className="text-white transition-transform duration-200"><PhoneIcon sx={{fontSize:"27px"}}/></span>
        </a>
        <section className="mt-[80px]">
            <Outlet />
        </section>
        <Footer />
    </>
}