import './newsP.css'
import nImage from '../../assets/images/bung.jpg'

export default function NewsPage() {
    return (
        <div className='news'>
            <div className="newsHeader">Real Estate News</div>
            
            <div className="itemsP">
                
                <div className="newsItem">
                    <div className="newsImage">
                        <img src={nImage} width='300px' alt="" />
                    </div>
                    <p className="newsTitle">5 types of real estate homes you should know</p>
                    <p className="newsLink">NewsLink</p>
                </div>
                <div className="newsItem">
                    <div className="newsImage">
                        <img src={nImage} width='300px' alt="" />
                    </div>
                    <p className="newsTitle">5 types of real estate homes you should know</p>
                    <p className="newsLink">NewsLink</p>
                </div>
                <div className="newsItem">
                    <div className="newsImage">
                        <img src={nImage} width='300px' alt="" />
                    </div>
                    <p className="newsTitle">5 types of real estate homes you should know</p>
                    <p className="newsLink">NewsLink</p>
                </div>
            </div>
        </div>
    )
}
