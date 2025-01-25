'use client'
import FormContactUs from "../FormContactUs/FormContactUs"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
    return <footer id="footer" className="bg-[#080c14] text-[#eee]">
        <section className="sm:p-5 mb-10">
            <div className=" h-1/2 rounded-sm">
                <div className="grid grid-cols-12 px-4 gap-5 p-5">
                    <div className="col-span-12 sm:col-span-12 md:col-span-6">
                        <header>
                            <h2 className="after:block mx-auto sm:mx-0 after:w-[40%]  after:h-1 after:bg-[#0078ff] after:mx-[auto] sm:after:mx-[5px] after:mt-[10px] w-fit font-bold text-4xl font-Poppins mb-4">أرسل لنا رسالة</h2>
                        </header>
                        <article className="mt-5">
                            <p className="text-lg font-cairo font-bold text-center sm:text-right">سيتم الإتصال خلال لحظات لتأكيد الحجز</p>
                        </article>
                        <div className="mt-[54px]">
                            <FormContactUs />
                        </div>
                    </div>
                    <div className="col-span-12 left sm:col-span-12 md:col-span-6 space-y-5">
                        <header>
                            <h3 className="after:block mx-auto sm:mx-0 after:w-[40%]  after:h-1 after:bg-[#0078ff] after:mx-[auto] sm:after:mx-[5px] after:mt-[10px] w-fit font-bold text-4xl font-Poppins mb-4">لا تنسى زيارتنا</h3>
                        </header>
                        <article className=" font-cairo space-y-5 font-semibold">
                            <p className="text-xl text-center sm:text-right">نوفر لك خدمة تغليف احترافية باستخدام أفضل المواد مثل الفقاعات الهوائية والكرتون المقوى لتوفير أقصى درجات الحماية لأثاثك أثناء النقل.
                            </p>
                            <p className="text-lg text-center sm:text-right">
                                ماذا تنتظر راسلنا الان عبر مواقع التواصل الإجتماعي او بتسجيل بيانتك هنا
                            </p>
                        </article>
                        <article className="font-Poppins text-xs sm:text-sm flex flex-col gap-1 items-start  font-bold">
                            <a href="https://maps.app.goo.gl/QimrsfF8j62Qxf2U6" target="_blank"><p className="flex items-center hover:underline"><span className="me-2 text-center text-green-200"><LocationOnOutlinedIcon sx={{ fontSize: "2.2cap" }} /></span>Riyadh-Saudi Arabia</p> </a>
                            <a href="tel:+966508137522" target="_blank"><p className="flex items-center hover:underline"><span className="me-2 text-center text-green-200 text-lg mb-1"><SmartphoneOutlinedIcon sx={{ fontSize: "1.8cap" }} /></span>966508137522+</p></a>
                            <a href="mailto:tamez.furniture.sa@gmail.com" target="_blank"><p className="flex items-center hover:underline"><span className="me-2 text-center text-green-200 "><EmailOutlinedIcon sx={{ fontSize: "2.2cap" }} /></span>tamez.furniture.sa@gmail.com</p></a>
                        </article>
                        <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1737415686102!5m2!1sar!2seg" className="border-0  w-full " allowFullScreen="" height={300} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-2 px-2 sm:px-0 bg-[#f1f1f1]">
            <div className="w-full sm:w-3/4  mx-auto flex gap-1 sm:gap-0 justify-between items-center sm:justify-between sm:items-center">

                <ul className="flex gap-1 text-xl">
                    <li>
                        <a href="https://www.instagram.com/ltmyzlnql?utm_source=qr&igsh=MTh1eHJ1dzZscXVjdQ==" target="_blank" className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#b9b8b8] hover:bg-[#9b9b9b] transition-colors duration-300">
                            <span className="text-white flex items-center">
                                <InstagramIcon fontSize="inherit" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send/?phone=966508137522&text&app_absent=0" target="_blank" className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#b9b8b8] hover:bg-[#9b9b9b] transition-colors duration-300">
                            <span className="text-white flex items-center">
                                <WhatsAppIcon fontSize="inherit" />
                            </span>
                        </a>
                    </li>
                </ul>
                <p className="text-[#9b9b9b] font-cairo font-bold text-[10px] sm:text-sm text-center">جميع الحقوق محفوظة لدى شركة التميز لنقل العفش 2025©</p>
            </div>
        </section>
    </footer>
}