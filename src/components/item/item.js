import './item.scss'

const Item = ({name, salary, increase, rise, onDelete, onToggleProp, onSalaryChange}) => {
    let listClass = 'list-group-item d-flex justify-content-between';

    if (increase) {
        listClass += ' increase';
    }

    if (rise) {
        listClass += ' like'
    }

    return (
        <li className={listClass}>
            <span className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle="rise">{name}</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'} 
                onChange={onSalaryChange}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default Item;