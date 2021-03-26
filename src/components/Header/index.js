import banner from '../../banner.jpg';
import {
    Navigation
} from '../index';
const Header = (props) => {
    return (
        <header style={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            minHeight: '100px'
        }}>
            <Navigation {...props} />
        </header>
    )
}

export default Header;