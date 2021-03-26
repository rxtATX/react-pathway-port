import {
    AboutMe,
    Contact,
    Portfolio,
    Resume
} from '../../pages';

const MainContent = ({ currentNav }) => {
    const renderPage = () => {
        switch (currentNav) {
            case "Contact":
                return <Contact />
            case "Portfolio":
                return <Portfolio />
            case "Resume":
                return <Resume />
            default: return <AboutMe />
        }
    }

    return (
        <main>
            {renderPage(currentNav)}
        </main>
    )
}

export default MainContent;