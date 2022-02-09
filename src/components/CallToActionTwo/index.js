//CALL TO ACTION TWO COMPONENT

//IMPORTING
import { Link } from 'react-router-dom';
import callToActionImg from '../../assets/ball.png';

//CALL TO ACTION TWO
const CallToActionTwo = () => {
    return (
        <section className="cta-section-2">
            <div className="cta-shape-1"><img src={callToActionImg} alt="" /></div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="sub-title"><span className="border-left"></span>Estamos Juntos Nessa</div>
                        <h3 className="sec-title">
                            Comece a sua jornada com a gente
                        </h3>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <Link className="arkay-btn" to="/">Começar Agora <i className="fa fa-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="cta-shape-2"><img src={callToActionImg} alt="" /></div>
        </section>
    );
};

export default CallToActionTwo;
