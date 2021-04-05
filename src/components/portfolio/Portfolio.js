import PortfolioCSS from './Portfolio.module.css'
import Projects from './projects/Projects'

const Portfolio = () => {
    return ( 
        <div className={PortfolioCSS.portfolio}>
            <h1>Portfolio.</h1>
            <p>Here are a few projects I've worked on recently.</p>
            <Projects />
        </div>
    );
}

export default Portfolio;