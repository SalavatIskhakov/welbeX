import { Component } from 'react';

import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';

// todo: изменить названия папок

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { date: '01.01.2022', name: 'Adel M.', quantity: '5000', distance: '200', id: 1,},
        { date: '01.01.2022', name: 'Boris S.', quantity: '7000', distance: '200', id: 2,},
        { date: '01.01.2022', name: 'Vladimir S.', quantity: '4000', distance: '200', id: 3,},
        { date: '01.01.2022', name: 'Salavat I.', quantity: '1000', distance: '200', id: 4,},
      ],
      term: '',
      filter: 'all',
    }
    this.maxId = 4;
  }

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>

        <EmployeesList
          data={visibleData}
        />
      </div>
    );
  }
}

export default App;
