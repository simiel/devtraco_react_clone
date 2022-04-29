import React from 'react'
import './getInTouch.css'

export default function GetInTouch() {
    return (
        <div className='talkToUs'>

            <div className="form">
            <form action="/">
        <h1>Get in Touch!</h1>
        <p>For more information about Devtraco Limited and our properties, kindly contact us and let's have a chat</p>
        <div class="info">
          <input class="fname" type="text" name="name" placeholder="Full name"/>
          <input type="text" name="name" placeholder="Email"/>
          <input type="text" name="name" placeholder="Phone number"/>
          <input type="text" name="name" placeholder="Reason"/>
        </div>
        <p>Message</p>
        <div>
          <textarea rows="4"></textarea>
        </div>
        <button type="submit" href="/">Submit</button>
      </form>
            </div>

            <div className="information">
                <div className="itemx">
                    <div className="infox">
                        <h5>Hotline</h5>
                        <p>mmmmmmmmm</p>
                    </div>
                    <div className="infox">
                        <h5>Telephone</h5>
                        <p>jjjjjjjjj</p>
                    </div>
                    <div className="infox">
                        <h5>Email</h5>
                        <p>xxx.yyy.com</p>
                    </div>
                    <div className="infox">
                        <h5>Head Office</h5>
                        <p>ACCRA</p>
                    </div>
                    
                </div>
                <div className="itemy">
                    <span className="WHours">Working Hours</span>
                    <span ><strong>Monday-Friday:</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 8am – 5pm.</span>
                    <span ><strong>Saturday:</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 8am – 5pm.</span>
                    <span ><strong>Sunday:</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 8am – 5pm.</span>
                    
                </div>
            </div>
            
        </div>
    )
}
