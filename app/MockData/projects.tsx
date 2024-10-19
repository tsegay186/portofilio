import beerRouletteThumbnail from '/public/thumbnails/beerRouletteThumbnail.jpg'
import digitalBingoThumbnail from '/public/thumbnails/digitalBingoThumbnail.jpg'
import leletalkThumbnail from '/public/thumbnails/leletalkThumbnail.jpg'
import geezOCRThumbnail from '/public/thumbnails/geezOcrThumbnail.jpg'
import letItBeThumbnail from '/public/thumbnails/letItThumbnail.jpg'
import jonatoThumbnail from '/public/thumbnails/tap-to-earn.jpg'

const jonatoo = {
    title: 'Jonato',
    inAppLink: '/projects/leletalk',
    gitHubLink: ['',''],
    webLink: '',
    thumbnail: jonatoThumbnail,
    description: `A fun and engaging Telegram-based clicker game inspired by the latest Web3 clicker projects. Players compete by tapping to earn rewards, unlock upgrades, and challenge others in dynamic, interactive battles.`,
    skills:['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Next Js', 'Grammy', 'Telegram Web App', 'Postgresql']
}

const leletalk = {
    title: 'Lele Talk',
    inAppLink: '/projects/leletalk',
    gitHubLink: ['https://github.com/tsegay186/leleclient','https://github.com/tsegay186/leleserver'],
    webLink: '',
    thumbnail: leletalkThumbnail,
    description: `a full-stack social network application currently in development on GitHub. It serves as a personal learning project to explore and refine my skills in various aspects of full-stack development, from front-end design and user interfaces to back-end architecture and secure data management.`,
    skills:['HTML', 'CSS', 'Vuetify', 'JavaScript', 'Vue', 'Vuex', 'Node Js', 'Express Js', 'Mongo Db']
}

const digitalBingo = {
    title: 'Digital Bingo',
    inAppLink: '/projects/bingo',
    gitHubLink: ['','https://github.com/tsegay186/youbet'],
    webLink: '',
    thumbnail: digitalBingoThumbnail ,
    description: `My passion project, Digital Bingo , is a web app reinventing the classic Bingo game for the digital age. Ditch the markers and missed wins! This platform generates Bingo Cards, automatically tracks numbers, instantly detects victorious patterns, and explodes in cheers for champions. Dive into diverse virtual rooms, and experience the excitement of the draw from anywhere with an internet connection. It's bingo made effortless and thrilling.`,
    skills:['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Vue', 'Node Js', 'Express Js', 'Mongo Db']
}
const geezOCR = {
    title: 'Geez OCR',
    inAppLink: '',
    gitHubLink: [''],
    webLink: '',
    thumbnail: geezOCRThumbnail ,
    description: `This project tackles the challenge of Ge'ez text recognition, developing an OCR system that handles both handwritten and document formats. Leveraging deep learning, it unlocks historical and contemporary content for research, preservation, and wider accessibility.`,
    skills:['Python', 'Machine Learning', 'Anaconda', 'OPenCv', 'Pandas']
}

    const letItBe = {
    title: 'Pentad',
    inAppLink: '/projects/letitbe',
    gitHubLink: ['https://github.com/tsegay186/letitbe','https://github.com/tsegay186/iconclast'],
    webLink: 'https://pentad.onrender.com/',
    thumbnail: letItBeThumbnail,
    description: `A social game of chance and intuition where players test their lucky charms against fate. Each participant selects five numbers, then collectively witnesses the app reveal random numbers one by one. The player whose chosen numbers are drawn first claims victory.`,
    skills:['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Vue', 'Node Js', 'SocketIo','Express Js']
}

const beerRoulette = {
    title: 'Beer Roulette',
    inAppLink: '/projects/beerroulette',
    gitHubLink: ['https://github.com/tsegay186/beerroulette'],
    webLink: 'https://beerroulette.vercel.app',
    thumbnail: beerRouletteThumbnail ,
    description: `The Beer Game is a simple but addictive game where players choose combination of numbers from 1 to 24. and then Some numbers(according to the game configuration) are drawn randomly if player's chosen numbers are there in the drawn numbers , they drink some(according to the odd) beer for free and get some payouts. If player’s chosen numbers are not there in the randomly drawn numbers, they pay some stake for their try.`,
    skills:['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React Js']
}

const myProjects = [jonatoo, beerRoulette, letItBe,geezOCR, digitalBingo, leletalk]

export default myProjects
