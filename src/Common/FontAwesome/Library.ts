import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPlus, faEye, faDesktop, faBars, faTimes, faWindowRestore, faWindowMinimize, faUserCog, faClipboardList, faArrowAltCircleDown, faTimesCircle, faCalendarAlt, faBold, faItalic, faCode, faUnderline, faList, faListUl, faListOl, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const icons = [
    faBars,
    faHome,
    faPlus,
    faEye,
    faDesktop,
    faTimes,
    faWindowRestore,
    faWindowMinimize,
    faTimesCircle,
    faUserCog,
    faTimes,
    faClipboardList,
    faArrowAltCircleDown,
    faCalendarAlt,
    faBold,
    faItalic,
    faUnderline,
    faCode,
    faListUl,
    faListOl,
    faQuoteRight
]

const loadFontAwesomeLibraries = () => {
    library.add(...icons);
}

export { loadFontAwesomeLibraries }
