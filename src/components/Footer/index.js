//FOOTER COMPONENT

//IMPORTING
import { Link } from 'react-router-dom';
import ThemeSlider from '../Slider';
import partnerOneImage from '../../assets/logo-1.png';
import partnerTwoImage from '../../assets/logo-2.png';
import partnerThreeImage from '../../assets/logo-3.png';
import partnerFourImage from '../../assets/logo-4.png';
import partnerFiveImage from '../../assets/logo-5.png';

//PARTNERS
const partners = [
    {
        id: 1,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 2,
        image: partnerTwoImage,
        link: '#'
    },
    {
        id: 3,
        image: partnerThreeImage,
        link: '#'
    },
    {
        id: 4,
        image: partnerFourImage,
        link: '#'
    },
    {
        id: 5,
        image: partnerFiveImage,
        link: '#'
    },
    {
        id: 6,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 7,
        image: partnerTwoImage,
        link: '#'
    },
    {
        id: 8,
        image: partnerThreeImage,
        link: '#'
    },
    {
        id: 9,
        image: partnerFourImage,
        link: '#'
    },
    {
        id: 10,
        image: partnerFiveImage,
        link: '#'
    }
];

//SETTINGS
const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    centerMode: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },

    ]
};

//FOOTER
const Footer = () => {
    return (
        <footer className="footer-01">
            <ThemeSlider images={partners} classes="client-logo owl-carousel" settings={settings} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-border"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">                    
                    <div className="col-lg-3 col-md-6">
                        <aside className="widget">
                            <h3 className="widget-title">Comunidade</h3>
                            <ul>
                                <li><Link to="/">Cultura</Link></li>
                                <li><Link to="/">Informações</Link></li>
                                <li><Link to="/">Qualidade</Link></li>
                                <li><Link to="/">Carreiras</Link></li>
                                <li><Link to="/">Prêmios</Link></li>
                                <li><Link to="/">Clube de Vantagens</Link></li>
                                <li><Link to="/">Promoções</Link></li>
                                <li><Link to="/">Sorteios</Link></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <aside className="widget">
                            <h3 className="widget-title">Imprensa</h3>
                            <ul>
                                <li><Link to="/">Cultura</Link></li>
                                <li><Link to="/">Politica</Link></li>
                                <li><Link to="/">Termos</Link></li>
                                <li><Link to="/">Equipe</Link></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <aside className="widget">
                            <h3 className="widget-title">SAC</h3>
                            <ul>
                                <li><Link to="/">Suporte</Link></li>
                                <li><Link to="/">Email</Link></li>
                                <li><Link to="/">Telefone</Link></li>
                                <li><Link to="/">Dúvidas Frequentes</Link></li>
                                <li><Link to="/">Reclamações</Link></li>
                                <li><Link to="/">Central</Link></li>
                            </ul>
                        </aside>
                    </div>                    
                    <div className="col-lg-3 col-md-6">
                        <aside className="widget">
                            <h3 className="widget-title">Links Úteis</h3>
                            <ul>
                            <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Sobre</Link></li>
                                <li><Link to="/">Serviços</Link></li>
                                <li><Link to="/">Clientes</Link></li>
                                <li><Link to="/">Notícias</Link></li>
                                <li><Link to="/">Contato</Link></li>
                            </ul>
                        </aside>
                        <aside className="widget">
                            <Link className="arkay-btn" to="/">Fale Conosco <i className="fa fa-long-arrow-right"></i></Link>
                        </aside>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright clearfix">
                            <ul>
                                <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-instagram"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-youtube"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
                            </ul>
                            <p>Arkay Solutions 2021 Todos os direitos reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
