import banner from '../../banner.jpg';
import {
    Navigation
} from '../index';
const Header = () => {
    return (
        <header style={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            minHeight: '100px'
        }}>
            <Navigation />
        </header>
    )
}

export default Header;