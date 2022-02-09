//BREADCRUMB COMPONENT

//IMPORTING
import { Link } from 'react-router-dom';

//BREADCRUMB
const Breadcrumb = ({ title = '' }) => {
    return (
        <div className="bread-crumbs">
            <Link to="/">Home</Link><span>|</span>{title}
        </div>
    );
};

export default Breadcrumb;
