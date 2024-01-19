import beerRouletteThumbnail from '/public/leletalkThumbnail.jpg'
import digitalBingoThumbnail from '/public/leletalkThumbnail.jpg'
import leletalkThumbnail from '/public/leletalkThumbnail.jpg'
import geezOCRThumbnail from '/public/leletalkThumbnail.jpg'
import letItBeThumbnail from '/public/leletalkThumbnail.jpg'
import nameStoreThumbnail from '/public/leletalkThumbnail.jpg'

const leletalk = {
    title: 'Lele Talk',
    inAppLink: '/projects/leletalk',
    gitHubLink: ['https://github.com/tsegay186/leleclient','https://github.com/tsegay186/leleserver'],
    webLink: '',
    thumbnail: leletalkThumbnail,
    description: `a full-stack social network application currently in development on GitHub. It serves as a personal learning project to explore and refine my skills in various aspects of full-stack development, from front-end design and user interfaces to back-end architecture and secure data management.`
}

const digitalBingo = {
    title: 'Digital Bingo',
    inAppLink: '/projects/bingo',
    gitHubLink: ['','https://github.com/tsegay186/youbet'],
    webLink: '',
    thumbnail: digitalBingoThumbnail ,
    description: `My passion project, Digital Bingo , is a web app reinventing the classic Bingo game for the digital age. Ditch the markers and missed wins! This platform generates Bingo Cards, automatically tracks numbers, instantly detects victorious patterns, and explodes in cheers for champions. Dive into diverse virtual rooms, and experience the excitement of the draw from anywhere with an internet connection. It's bingo made effortless and thrilling.`}
const geezOCR = {
    title: 'Geez OCR',
    inAppLink: '',
    gitHubLink: [''],
    webLink: '',
    thumbnail: geezOCRThumbnail ,
    description: `This project tackles the challenge of Ge'ez text recognition, developing an OCR system that handles both handwritten and document formats. Leveraging deep learning, it unlocks historical and contemporary content for research, preservation, and wider accessibility.`
}

    const letItBe = {
    title: 'Let It Be',
    inAppLink: '/projects/letitbe',
    gitHubLink: ['https://github.com/tsegay186/letitbe','https://github.com/tsegay186/iconclast'],
    webLink: 'https://letit.onrender.com/',
    thumbnail: letItBeThumbnail,
    description: `A social game of chance and intuition where players test their lucky charms against fate. Each participant selects five numbers, then collectively witnesses the app reveal random numbers one by one. The player whose chosen numbers are drawn first claims victory.`
}

const beerRoulette = {
    title: 'Beer Roulette',
    inAppLink: '/projects/beerroulette',
    gitHubLink: ['https://github.com/tsegay186/beerroulette'],
    webLink: 'https://beerroulette.vercel.app',
    thumbnail: beerRouletteThumbnail ,
    description: `The Beer Game is a simple but addictive game where players choose combination of numbers from 1 to 24. and then Some numbers(according to the game configuration) are drawn randomly if player's chosen numbers are there in the drawn numbers , they drink some(according to the odd) beer for free and get some payouts. If player’s chosen numbers are not there in the randomly drawn numbers, they pay some stake for their try.`
}

const nameStore = {
    title: 'Name Store',
    inAppLink: '',
    gitHubLink: ['github.com/tsegay186/namestore'],
    webLink: '',
    thumbnail: nameStoreThumbnail,
    description: `This innovative app dives into the diverse names across cultures, uncovering the playful nicknames and heartfelt endearments used around the world. Users can contribute their knowledge, building a vibrant community that celebrates the uniqueness and shared humanity woven into names.`
}

const myProjects = [nameStore, beerRoulette, letItBe,geezOCR, digitalBingo, leletalk]

export default myProjects
