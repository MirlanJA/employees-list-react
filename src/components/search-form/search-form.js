import './search-form.scss'

const SearchForm = ({term, onUpdateSearch}) => {
    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Find an employee"
            value={term}
            onChange={onUpdateSearch}/>
    );
}

export default SearchForm;