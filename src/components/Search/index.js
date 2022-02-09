//SEARCH COMPONENT

//IMPORTING
import { useState } from 'react';
import { Link } from 'react-router-dom';

//SEARCH
const Search = () => {
    const [showSearchform, setShowSearchForm] = useState(false);
    const handleSearch = () => {
        setShowSearchForm(props => !props);
    }
    return (
        <div className={`search-area ${showSearchform ? 'active' : ''}`}>
            <Link to="/" className="search-btn" onClick={handleSearch}><i className="fa fa-search"></i></Link>
            <form role="search" method="get" className="searchForms" action="#">
                <input type="search" placeholder="Digite e pressione enter..." name="s" />
                <button type="submit" className="search-submit"><i className="twi-search2"></i></button>
            </form>
        </div>
    );
};

export default Search;
