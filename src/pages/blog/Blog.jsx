import Awards from "../../components/awards/Awards";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import History from "../../components/history/History";
import Navbar from "../../components/navbar/Navbar";
import News from "../../components/news/News";
import NewsPage from "../../components/newspage/NewsPage";
import NewsSplash from "../../components/newspage/NewsSplash";
import Review from "../../components/review/Review";
import Splash from "../../components/splash/Splash";
import TalkToUs from "../../components/TalkToUs/TalkToUs";
import TopProperties from "../../components/topProperties/TopProperties";


export default function Blog() {
    return (
        <div>
            <div>
                <p>BLOG</p>
            <Header/>
            <Navbar/>
            <NewsSplash/>
            <NewsPage/>
            <Footer/>
        </div>
        </div>
    )
}
