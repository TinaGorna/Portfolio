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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="300" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    {/*<iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95428.5661016646!2d37.36811123227279!3d55.666872998837725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5520eed43ee9f%3A0xd91f523c2aba1f74!2sSolntsevo%20District%2C%20Moscow%2C%20Russia!5e0!3m2!1sen!2suk!4v1620281535742!5m2!1sen!2suk"
                        width="600" height="450"  frameBorder="0"  style="border:0;" aria-hidden="false" tabIndex="0" allowFullScreen="" loading="lazy"></iframe>*/}

                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+7 901 364 74 50'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'kristina.gorbunova1997@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Tatyanin Park st, Moscow, Russia'} text2={'Russia'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
