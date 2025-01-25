import { Helmet } from "react-helmet-async";
import FormRequestService from "../../components/FormRequestService/FormRequestService";
export default function ServiceRequest() {
    return <section className="pt-5 px-1 sm:px-5 lg:px-0 pb-5">
        <Helmet>
            <title>طلب الخدمة</title>
            <meta name="description" content="أطلب خدمتك الان وبسهولة وسنتواصل معك خلال دقائق لتأكيد حجزك" />
        </Helmet>
        <FormRequestService/>
    </section>
}