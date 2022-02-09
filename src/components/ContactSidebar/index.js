//CONTACT SIDE BAR COMPONENT

//CONTACT SIDE BAR
const ContactSidebar = ({ contactInfo }) => {
    return (
        <div className="col-lg-4">
            <div className="contct-box">
                <i className="fa fa-phone"></i>
                <h3>Ligue pra Gente</h3>
                <p>
                    {contactInfo.numberOne}<br />
                    {contactInfo.numberTwo}
                </p>
            </div>
            <div className="contct-box">
                <i className="fa fa-envelope"></i>
                <h3>Envie um Email</h3>
                <p>
                    {contactInfo.emailOne}<br />
                    {contactInfo.emailTwo}
                </p>
            </div>
            <div className="contct-box">
                <i className="fa fa-map-marker"></i>
                <h3>Localização</h3>
                <p>
                    {contactInfo.locationOne}<br />
                    {contactInfo.locationTwo}
                </p>
            </div>
        </div>
    );
};

export default ContactSidebar;
