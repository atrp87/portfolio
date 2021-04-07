import PortfolioCSS from './Portfolio.module.css';
import Projects from './projects/Projects';
import { motion } from 'framer-motion';

    const pageVariants = {
        initial: {
            opacity: 0
        },
        final: {
            opacity: 1,
            transition: {delay: 1, duration: 1}
        },
        exit: {
            opacity: 0,
            transition: {ease: 'easeInOut'}
        }
    }

const Portfolio = () => {
    return ( 
        <motion.div className={PortfolioCSS.portfolio}
            variants={pageVariants}
            initial='initial'
            animate='final'
            exit='exit'
        >
            <h1>Portfolio.</h1>
            <p>Here are a few projects I've worked on recently.</p>
            <Projects />
        </motion.div>
    );
}

export default Portfolio;