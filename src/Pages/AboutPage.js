import React from 'react'
import Tittle from "../Components/Title";
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/blogs/design.svg';
import intelligence from '../img/blogs/intelligence.svg';
import gamedev from '../img/blogs/game-dev.svg';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Tittle title={'My Skills'} span={'Technologies'}/>
            <div className="skillsContainer">
                <SkillsSection skill={'Typescript'}/>
                <SkillsSection skill={'Javascript'}/>
                <SkillsSection skill={'React'}/>
                <SkillsSection skill={'Redux'}/>
                <SkillsSection skill={'Rest API'}/>
                <SkillsSection skill={'Axios'}/>
                <SkillsSection skill={'UI/UX Design'}/>
                <SkillsSection skill={'Material UI'}/>
            </div>

            <Tittle title={'Services'} span={'Services'}/>
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'}
                                 text={'True craftmanship is when \'design\' and \'build\' work together.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'}
                                 text={'Сognitive technology could usher productivity.'}
                />
                <ServicesSection image={gamedev} title={'Web Development'}
                                 text={'Building, creating, and maintaining websites.'}
                />
            </div>
        </div>
    )
}

export default AboutPage;
