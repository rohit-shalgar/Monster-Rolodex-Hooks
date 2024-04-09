import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => { 
        return <input
            className={className}
            type='search'
            onChange={onChangeHandler}
            placeholder={placeholder}
        />
    }

export default SearchBox;
