import PortfolioCSS from './Portfolio.module.css'
import placeholder1 from '../../assets/placeholder.jpeg';

const Portfolio = () => {
    return ( 
        <div className={PortfolioCSS.portfolio}>
            <h1>Portfolio.</h1>
            <p>Some of my latest projects I've woked on this year</p>
            <div className={PortfolioCSS.projects}>
                <div className="grid-item1">
                    <img src={placeholder1} alt=""/>
                </div>
                <div className="grid-item">
                    <img src={placeholder1} alt=""/>
                </div>
                <div className="grid-item">
                    <img src={placeholder1} alt=""/>
                </div>
                <div className="grid-item">
                    <img src={placeholder1} alt=""/>
                </div>
                <div className="grid-item">
                    <img src={placeholder1} alt=""/>
                </div>
                <div className="grid-item">
                    <img src={placeholder1} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;