//CONTACT PAGE

//IMPORTING
import BannerTwo from '../../components/BannerTwo';
import ContactForm from '../../components/ContactForm';
import ContactSidebar from '../../components/ContactSidebar';

//CONTACT INFO
const contactInfo = {
    numberOne: "+55 (11) 3354-3333",
    numberTwo: "+55 (11) 3333-3333",
    emailOne: "contato@arkay.com",
    emailTwo: "info@arkay.com",
    locationOne: "Avenida Rio Branco n° 254",
    locationTwo: "Pompéia, São Paulo-SP"
};

//CONTACT
const Contact = () => {
    return (
        <>
            <BannerTwo pageTitle="Entre em Contato" title="Contato" />
            <section className="contact-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="sub-title-2"><span>Contato</span></div>
                            <h3 className="sec-title">Envie uma Mensagem</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-page-form">
                                <ContactForm />
                            </div>
                        </div>
                        <ContactSidebar contactInfo={contactInfo} />
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="arkay-map grayscale">
                            <iframe title="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.813840234036!2d-46.6955158197033!3d-23.534176255140554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57e13e4c89bb%3A0x64cef5960be812e4!2sPompeia%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1636144906345!5m2!1spt-BR!2sbr" scrolling="no"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
