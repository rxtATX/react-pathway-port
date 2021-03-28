import {
    SocialIcon
} from 'react-social-icons';

const SocialItem = ({ url, text }) => {
    return (
        <li>
            <SocialIcon
                bgColor="#f7f3ed"
                fgColor="#FE4A11"
                url={url} />
            <a
                className="text-main"
                href={url}
                rel="noreferrer"
                target="_blank">
                {text}
            </a>
        </li>
    )
}

export default SocialItem;