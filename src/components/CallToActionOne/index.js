//CALL TO ACTION ONE COMPONENT

//IMPORTING
import { Link } from 'react-router-dom';
import callToActionOneImg from '../../assets/man-1.png';
import callToActionTwoImg from '../../assets/man-2.png';

//CALL TO ACTION ONE
const CallToActionOne = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="cta-item">
                            <img src={callToActionOneImg} alt="" />
                            <Link to="#">Agendar com Consultor<i className="fa fa-long-arrow-right"></i></Link>
                            <h4>Consultoria para sua Empresa</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="cta-item right">
                            <img src={callToActionTwoImg} alt="" />
                            <Link to="#">Falar agora com um Consultor<i className="fa fa-long-arrow-right"></i></Link>
                            <h4>Consultoria para sua Micro Empresa</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionOne;
