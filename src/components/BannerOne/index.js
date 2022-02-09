//BANNER ONE COMPONENT

//IMPORTING
import { Link } from 'react-router-dom';
//ASSETS
import heroBgImage from '../../assets/hero.jpg';

//BANNER ONE
const BannerOne = () => {
    return (
        <section className="hero-banner-01" style={{ backgroundImage: `url(${heroBgImage})` }} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-10">
                        <div className="banner-content">
                            <div className="sub-heading">
                                A melhor consultoria em negócios para sua empresa
                        	</div>
                            <h1>Soluções &</h1>
                            <h1>Consultoria</h1>
                            <p>
                                Começamos sempre traçando um planejamento profundo e concreto
                                para transformar o seu negócio de maneira a levá-lo para um outro nível no mercado.
                            </p>

                            <ul>
                                <li><Link className="arkay-btn" to="/">Saiba Mais <i className="fa fa-long-arrow-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerOne;
