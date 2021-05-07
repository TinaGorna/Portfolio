import React from 'react';
import about from '../img/blogs/me2.jpg';


function ImageSection() {

    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>

            <div className="about-info">
                <h4>I am<span> Kristina Gorbunova</span></h4>
                <div className="about-text">
                    <div>The process of building a webpage fascinates me. I am passionate about UX/UI design, SEO, mobile
                        first approach and eager to expand my knowledge of web development.</div>
                </div>
                <div className="about-details">
                    <div className="left-section">
                        <div>Full Name</div>
                        <div>Age</div>
                        <div>Nationality</div>
                        <div>Education</div>
                        <div>Languages</div>
                        <div>Country</div>
                    </div>
                    <div className="right-section">
                        <div>: Kristina Gorbunova</div>
                        <div>: 23</div>
                        <div>: Russian</div>
                        <div>: Peoples' Friendship university of Russia</div>
                        <div>: English, French</div>
                        <div>: Moscow, Russia</div>
                    </div>
                </div>
                {/*<button className="btn">{downloadFile}</button>*/}
            </div>
        </div>
    )
}

export default ImageSection;
