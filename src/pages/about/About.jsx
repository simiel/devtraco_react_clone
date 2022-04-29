import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import AboutUs from "../../components/about/About";
import MiniSplash from "./MiniSplash";


export default function About() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <MiniSplash/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}
