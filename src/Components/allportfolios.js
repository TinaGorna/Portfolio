import app from '../img/portImages/app.png';
import scroll from '../img/portImages/scroll.png';
import moto from '../img/portImages/macBook.png';
import counter from '../img/portImages/img.png'

const portfolios = [
    {
        id: 1,
        category: 'Social Network',
        link1: 'https://tinagorna.github.io/social-network/',
        icon1: 'view',
        image: app,
        title: 'React, Redux, Axios, Rest Api'
    },
    {
        id: 2,
        category: 'Scroll',
        link1: 'https://tinagorna.github.io/smooth-scroll/',
        icon1: 'view',
        image: scroll,
        title: 'Smooth scroll website: Javascript'
    },
    {
        id: 3,
        category: 'Web Design',
        link1: 'https://www.behance.net/gallery/118057753/Landing-page-for-Moto-Company',
        icon1: 'view',
        image: moto,
        title: 'Web Design: Figma'
    },
    {
        id: 4,
        category: 'Counter',
        link1: 'https://tinagorna.github.io/control-work/',
        icon1: 'view',
        image: counter,
        title: 'Counter: LocalStorage'
    }

]

export default portfolios;