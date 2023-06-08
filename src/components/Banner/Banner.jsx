function Banner({ title, imgSrc }) {
    return (
        <header className="bannerDefault">
            {title && <h1 className="h1Default">{title}</h1>}
            <img src={imgSrc} alt="Banniere"/>
        </header>
    );
}

export default Banner;
