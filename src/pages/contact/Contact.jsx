import Awards from "../../components/awards/Awards";
import Footer from "../../components/footer/Footer";
import ContactSplash from "../../components/getInTouch/ContactSplash";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Header from "../../components/header/Header";
import History from "../../components/history/History";
import Navbar from "../../components/navbar/Navbar";
import News from "../../components/news/News";
import Review from "../../components/review/Review";
import Splash from "../../components/splash/Splash";
import TalkToUs from "../../components/TalkToUs/TalkToUs";
import TopProperties from "../../components/topProperties/TopProperties";


export default function Contact() {
    return (
        <div>
            <p>CONTACT</p>
            <Header/>
            <Navbar/>
            <ContactSplash/>
            <GetInTouch/>
            <Footer/>
        </div>
    )
}
