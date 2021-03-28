import {
    AboutMe,
    Contact,
    Portfolio,
} from '../../pages';

const MainContent = ({ currentNav }) => {
    const renderPage = () => {
        switch (currentNav) {
            case "Contact":
                return <Contact />
            case "Portfolio":
                return <Portfolio />
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