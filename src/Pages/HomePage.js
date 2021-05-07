import React from 'react';
import {faBehance, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ReactTypingEffect from 'react-typing-effect';


function HomePage() {
    return (
        <div className="HomePage">
            {/*<ParticleBackground className='particles' params={ParticleConfig}/>*/}
            <header className="hero">
                <h1 className="hero-text">
                    <ReactTypingEffect
                        text={" Hi, I am Kristina"}/>
                </h1>
                <div className="h-sub-text">
                    <div>
                        I am web developer. <div>I started learning more about web development when I was launching my
                        online English courses and needed to build websites for my personal brand, blog about
                        English.</div>  {/*<p>That time, I realized that I'm more interested in the technical part of my
                        courses.</p>*/}
                        <div>Thus, I decided to dive deep into coding.</div>{/*
                        <p>So, I decided to dive deep into coding. Since then, I've built performant and accessible websites and web applications using HTML, CSS, React.js, Django, Git Version Control.</p>
                        <p>The process of building a webpage from scratch fascinates me! I am passionate about UX/UI design, SEO, mobile first approach and eager to expand my knowledge of web development.</p>*/}
                    </div>
                </div>
                <div className="icons">
                    <a href="https://www.behance.net/kristingorbuno" className="icon-holder">
                        <FontAwesomeIcon icon={faBehance} className="icon be"/>
                    </a>
                    <a href="https://github.com/TinaGorna" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </a>
                    <a href="https://www.linkedin.com/in/kristina-gorbunova" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon link"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
