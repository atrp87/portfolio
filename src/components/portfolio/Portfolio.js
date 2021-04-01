import PortfolioCSS from './Portfolio.module.css'
import Grid from './grid/Grid'

const Portfolio = () => {
    return ( 
        <div className={PortfolioCSS.portfolio}>
            <h1>Portfolio.</h1>
            <p>Some of my latest projects I've worked on this year</p>
            <Grid />
        </div>
    );
}

export default Portfolio;