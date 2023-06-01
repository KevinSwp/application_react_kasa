function Banner({ imgSrc }) {
    return (
        <header className="bannerDefault">
            <h1 className="h1Default">Banniere</h1>
            <img src={imgSrc} alt="Banniere"/>
        </header>
    );
}

export default Banner;
