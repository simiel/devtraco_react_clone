import React from 'react'
import viss from '../../assets/images/jumper.png'
import aimImage from '../../assets/images/mission.png'
import './about.css'

export default function AboutUs() {
    return (
        <div className='aboutComp'>
            <div className="histories">
                <div className="historyTab">
                    <div className="histImage"><img src={viss} alt="" /></div>
                    <div className="histText"><p>Our head office is located on the Spintex Road and the company employs over 500 people. We are one of the largest and prominent real estate companies in the country in terms of market capitalization. Our estates span across emerging areas in the Greater Accra Region. These include Greda Housing Project at Teshie-Nungua, Dovehill Estates at Spintex Road, Devtraco Villas at Baatsona (Tema Community 18) and currently, Devtraco Courts at Tema Community 25.</p></div>
                </div>
                <div className="historyTab">
                    <div className="histText"><p>Our head office is located on the Spintex Road and the company employs over 500 people. We are one of the largest and prominent real estate companies in the country in terms of market capitalization. Our estates span across emerging areas in the Greater Accra Region. These include Greda Housing Project at Teshie-Nungua, Dovehill Estates at Spintex Road, Devtraco Villas at Baatsona (Tema Community 18) and currently, Devtraco Courts at Tema Community 25.</p></div>
                    <div className="histImage"><img src={viss} alt="" /></div>
                </div>
            </div>

            <div className="aim">
                <div className="mission">
                    <img src={aimImage} alt="" />
                    <h3 className="aimTitle">MISSION</h3>
                    <p className="aimText">To contribute towards the enhancement of the quality of life of Ghanaians & West Africa, by applying sustainable development principles in the provision of affordable homes in a safe and secured environment.</p>
                </div>
                <div className="mission">
                    <img src={aimImage} alt="" />
                    <h3 className="aimTitle">VISION</h3>
                    <p className="aimText">To contribute towards the enhancement of the quality of life of Ghanaians & West Africa, by applying sustainable development principles in the provision of affordable homes in a safe and secured environment.</p>
                </div>
            </div>

            <div className="convo">
                <p>Get your secured, safe home investment with Devtraco Limited</p>
                <button>START A CONVERSATION</button>
                </div>
        </div>
    )
}
