import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/blogs/phone.svg';
import email from '../img/blogs/emailme.svg';
import location from '../img/blogs/location.svg';
import Tittle from "../Components/Title";


function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95428.5661016646!2d37.36811123227279!3d55.666872998837725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5520eed43ee9f%3A0xd91f523c2aba1f74!2sSolntsevo%20District%2C%20Moscow%2C%20Russia!5e0!3m2!1sen!2suk!4v1620281535742!5m2!1sen!2suk" width="600" height="300" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                    <script async
                            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaV_WXLnPhxX26F0vg-S1VFTRt4gOjD60&callback=initMap">
                    </script>
                    {/*AIzaSyCaV_WXLnPhxX26F0vg-S1VFTRt4gOjD60*/}

                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+7 901 364 74 50'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'kristina.gorbunova1997@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Tatyanin Park st, Moscow, Russia'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
