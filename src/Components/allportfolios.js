import app from '../img/portImages/app.png';
import scroll from '../img/portImages/scroll.png';
import moto from '../img/portImages/macBook.png';
import counter from '../img/portImages/img.png'

const portfolios = [
    {
        id: 1,
        category: 'Social Network',
        link1: 'https://tinagorna.github.io/social-network/',
        link2: 'https://github.com/TinaGorna/social-network',
        icon1: 'view',
        icon2: 'code',
        image: app,
        title: 'React, Redux, Axios, Rest Api'
    },
    {
        id: 2,
        category: 'Scroll',
        link1: 'https://tinagorna.github.io/smooth-scroll/',
        link2: 'https://github.com/TinaGorna/smooth-scroll',
        icon1: 'view',
        icon2: 'code',
        image: scroll,
        title: 'Smooth scroll website: Javascript'
    },
    {
        id: 3,
        category: 'Web Design',
        link1: 'https://www.behance.net/gallery/118057753/Landing-page-for-Moto-Company',
        link2: 'https://www.linkedin.com/posts/kristina-gorbunova_landing-page-for-moto-company-activity-6791005704250642432-vVR-',
        icon1: 'view',
        icon2: 'Linkedin',
        image: moto,
        title: 'Web Design: Figma'
    },
    {
        id: 4,
        category: 'Counter',
        link1: 'https://tinagorna.github.io/control-work/',
        link2: 'https://github.com/TinaGorna/control-work',
        icon1: 'view',
        icon2: 'code',
        image: counter,
        title: 'Counter: React (hooks)'
    }

]

export default portfolios;