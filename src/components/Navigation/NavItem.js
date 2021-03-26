const NavItem = ({ text, currentNav, setCurrentNav }) => {
    return (
        <li style={currentNav === text ? { fontWeight: "bold" } : {}} onClick={() => setCurrentNav(text)}>{text}</li>
    )
}

export default NavItem;