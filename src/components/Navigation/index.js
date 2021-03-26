import NavItem from './NavItem';

const navs = [
    "About Me",
    "Portfolio",
    "Contact",
    "Resume"
];

const Navigation = ({ currentNav, setCurrentNav }) => {
    return (
        <ul>
            {navs.map((text, i) => {
                return <NavItem text={text} currentNav={currentNav} setCurrentNav={setCurrentNav} key={i} />
            })}
        </ul>
    )
}

export default Navigation;