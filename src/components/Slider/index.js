//SLIDER COMPONENT

//IMPORTING
import { Link } from 'react-router-dom';
import ReactSlider from "react-slick";

//SLIDER
const Slider = ({ images, settings, classes = "" }) => {
    return (
        <ReactSlider className={classes} {...settings}>
            {
                images?.map((image, index) => {
                    return (
                        <Link key={index} to={image?.link}>
                            <img src={image?.image} alt="" />
                        </Link>
                    )
                })
            }
        </ReactSlider>
    );
};

export default Slider;
