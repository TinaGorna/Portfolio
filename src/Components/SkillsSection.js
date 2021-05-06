import React from 'react'

function SkillsSection({skill,progress,width}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h4 className="skill-title">{skill}</h4>
                <div className="skill-bar">
                    <p className="skill-progress">{progress}</p>
                    <div className="skill-text">
                        <div className="progress">
                            <div className="inner-progress" style={{width:width}}> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;
