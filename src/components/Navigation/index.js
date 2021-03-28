import NavItem from './NavItem';

const navs = [
    "About Me",
    "Portfolio",
    "Contact",
];

const Navigation = ({ currentNav, setCurrentNav, resumeDownload }) => {
    return (
        <ul>
            {navs.map((text, i) => {
                return <NavItem text={text} currentNav={currentNav} setCurrentNav={setCurrentNav} key={i} />
            })}
            <li onClick={resumeDownload}>Resume</li>
        </ul>
    )
}

export default Navigation;