import PortfolioCSS from './Portfolio.module.css'
import placeholder1 from '../../assets/placeholder.jpeg';

const Portfolio = () => {
    return ( 
        <div className={PortfolioCSS.portfolio}>
            <h1>Portfolio.</h1>
            <p>Some of my latest projects I've worked on this year</p>
            <div className={PortfolioCSS.grid}>
                <div className={PortfolioCSS.col}>
                    <img src={placeholder1} alt="Portfolio Project Screenshot"/>
                </div>
                <div className={PortfolioCSS.col}>
                    <img src={placeholder1} alt="Covid-19 Project Screenshot"/>
                </div>
                <div className={PortfolioCSS.col}>
                    <img src={placeholder1} alt="Spending Tracker Project Screenshot"/>
                </div>
                <div className={PortfolioCSS.col}>
                    <img src={placeholder1} alt="PYCP Project Screenshot"/>
                </div>
                <div className={PortfolioCSS.col}>
                    <img src={placeholder1} alt="Blog Project Screenshot"/>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;