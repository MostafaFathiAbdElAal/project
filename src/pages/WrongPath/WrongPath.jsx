'use client'
import { Helmet } from "react-helmet-async"
import imgWarning from "../../images/exclamation-warning-round-red-icon.svg"
import Navbar from "../../components/Navbar/Navbar"
export default function WrongPath() {
    return <>
        <Helmet>
            <title>مسار خاطئ</title>
        </Helmet>
        <Navbar />
        <section
            className="text-white px-3 sm:px-0 h-screen font-cairo w-full flex flex-col justify-start pt-40 items-center bg-[#080c14] bg-opacity-90">
            <img loading="lazy" className="max-w-40 select-none mb-4" src={imgWarning} alt="مسار خاطئ" />
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
                خطأ 404  </h2>
            <p className="text-center font-semibold text-sm mt-2 ">
                عفوا هذا المسار غير صحيح يمكنك اختيار مسار صحيح من أعلى
            </p>
        </section>
    </>
}