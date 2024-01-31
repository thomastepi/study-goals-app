type HeaderProps = {
    children: React.ReactNode;
    image: {
        src: string;
        alt: string;
    }
}

const Header: React.FC<HeaderProps> = ({image, children}) => {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            {children}
        </header>
    )
}

export default Header