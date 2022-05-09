import Item from "../item/item";
import './list.scss';

const List = ({data, onDelete, onToggleProp, onSalaryChange}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <Item 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) =>  onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryChange={(e) => onSalaryChange(id, e.currentTarget.value)}/>
        )
    })

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    );
}

export default List;