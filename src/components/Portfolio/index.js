//PORTIFOLIO COMPONENT

//IMPORTING
import { Link } from 'react-router-dom';
import portfolioOne from '../../assets/home-1.jpg';
import portfolioTwo from '../../assets/home-2.jpg';
import portfolioThree from '../../assets/home-3.jpg';
import portfolioFour from '../../assets/home-4.jpg';
import portfolioFive from '../../assets/home-5.jpg';
import portfolioSix from '../../assets/home-6.jpg';

//PORTIFOLIOS
const portfolios = [
    {
        id: 1,
        image: portfolioOne,
        tag: 'Consultoria',
        title: 'AMS Agência de Marketing',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 2,
        image: portfolioTwo,
        tag: 'Gestão de Negócios',
        title: 'Young and Newman Co.',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 3,
        image: portfolioThree,
        tag: 'Planejamento Estratégico',
        title: 'MaisBarato App',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 4,
        image: portfolioFour,
        tag: 'Consultoria',
        title: 'Datacom Software',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 5,
        image: portfolioFive,
        tag: 'Planejamento Estratégico',
        title: 'Max Sistemas Inteligentes',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 6,
        image: portfolioSix,
        tag: 'Gestão de Negócios',
        title: 'Talara Networks',
        icon: 'fa-arrow-right',
        link: '#'
    }
];

//PORTIFOLIO
const Portfolio = () => {
    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <div className="sub-title"><span className="border-left"></span>Estudo de Caso</div>
                        <h3 className="sec-title">
                            Algumas Coisas Legais
                        </h3>
                    </div>
                    <div className="col-lg-6 col-md-4">
                        <Link className="arkay-btn" to="/">Mais Trabalhos <i className="fa fa-long-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row">
                    {
                        portfolios?.map(portfolio => {
                            return (
                                <div key={portfolio?.id} className="col-lg-4 col-md-6">
                                    <div className="work-item">
                                        <img src={portfolio?.image} alt="" />
                                        <div className="work-detail">
                                            <Link className="cate" to={portfolio?.link}>{portfolio?.tag}</Link>
                                            <h4>{portfolio?.title}</h4>
                                            <Link to={portfolio?.link} className="read-more"><i className={`fa ${portfolio?.icon}`}></i></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
