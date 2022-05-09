import './filter-form.scss'

const FilterForm = ({filter, onUpdateFilter}) => {
    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'rise', label: 'For promotion'},
        {name: 'moreThen1000', label: 'The salary > 1000$'},
    ];
    const buttons = buttonsData.map(({name, label}) => {
        return (
            <button 
                key={name} 
                className={'btn ' + (filter === name ? 'btn-light' : 'btn-outline-light')} 
                type="button"
                onClick={() => onUpdateFilter(name)}>
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
        
    );
}

export default FilterForm;