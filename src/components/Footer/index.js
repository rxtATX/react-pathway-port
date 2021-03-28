import SocialItem from './SocialItem';

const socials = [
    {
        url: "https://github.com/rxtATX",
        text: "Check me out on GitHub"
    },
    {
        url: "https://www.linkedin.com/in/rachel-thiim/",
        text: "Connect with me on LinkedIn"
    },
    {
        url: "https://discord.com/",
        text: "Let's chat on Discord"
    },
]

const Footer = () => {
    return (
        <footer>
            <ul>
                {
                    socials.map(({ url, text }, i) => <SocialItem key={i} url={url} text={text} />)
                }
            </ul>
        </footer>
    )
}

export default Footer;