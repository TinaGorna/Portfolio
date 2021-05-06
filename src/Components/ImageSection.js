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
                <p className="about-text">
                    <p>The process of building a webpage fascinates me. I am passionate about UX/UI design, SEO, mobile
                        first approach and eager to expand my knowledge of web development.</p>
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Education</p>
                        <p>Languages</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Kristina Gorbunova</p>
                        <p>: 23</p>
                        <p>: Russian</p>
                        <p>: Peoples' Friendship university of Russia</p>
                        <p>: English, French</p>
                        <p>: Moscow, Russia</p>
                    </div>
                </div>
                {/*<button className="btn">{downloadFile}</button>*/}
            </div>
        </div>
    )
}

export default ImageSection;
