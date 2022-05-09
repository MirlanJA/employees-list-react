import { Component } from 'react';
import Info from '../info/info';
import SearchForm from '../search-form/search-form';
import FilterForm from '../filter-form/filter-form';
import List from '../list/list';
import AddForm from '../add-form/add-form';
import './app.scss';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {id: 1, name: 'John', salary: 1000, increase: true, rise: true},
                {id: 2, name: 'Alex', salary: 1500, increase: false, rise: false},
                {id: 3, name: 'Bob', salary: 2500, increase: false, rise: false},
            ],
            term: '' ,
            filter: 'all'       
        }
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (obj) => {
        this.setState(({data}) => {
            obj.id = data.length + 1;
            obj.increase = false;
            obj.rise = false;
            return {
                data: [...data, obj]
            }
        })
    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === +id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }
    onUpdateSearch = (term) => {
        this.setState({
            term
        });
    }
    searchEmp = (data, term) => {
        if (term.length === 0) {
            return data;
        }

        return data.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    }
    onUpdateFilter = (filter) => {
        this.setState({
            filter
        })
    }
    filterPost = (data, filter) => {
        switch (filter) {
            case 'rise':
                return data.filter(item => item.rise);
            case 'moreThen1000':
                return data.filter(item => item.salary > 1000);
            default:
                return data;
        }
    }
    onSalaryChange = (id, newSalary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === +id) {
                    return {...item, salary: parseInt(newSalary)}
                }
                return item;
            })
        }));
    }
    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        const increased = visibleData.filter(item => item.increase).length;

        return (
            <div className="app">
                <Info total={visibleData.length} increased={increased}/>
                <div className='search-panel'>
                    <SearchForm onUpdateSearch={(e) => this.onUpdateSearch(e.target.value)} term={term}/>
                    <FilterForm filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
                <List data={visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSalaryChange={this.onSalaryChange}/>
                <AddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;