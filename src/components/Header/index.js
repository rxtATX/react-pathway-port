import banner from '../../banner.jpg';

const Header = () => {
    return (
        <header style={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            minHeight: '100px'
        }}>
        </header>
    )
}

export default Header;