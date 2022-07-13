import { useState, useEffect } from 'react';

import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';

import './app.css';

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('name');
  const [condition, setCondition] = useState('include');

  useEffect(() => {
    setData([
      { date: '01.01.2022', name: 'Adel M.', quantity: 5000, distance: 200, id: 1, },
      { date: '01.01.2022', name: 'Boris S.', quantity: 7000, distance: 300, id: 2, },
      { date: '01.01.2022', name: 'Vladimir S.', quantity: 4000, distance: 400, id: 3, },
      { date: '01.01.2022', name: 'Salavat I.', quantity: 1000, distance: 500, id: 4, },
    ]);
  }, [])

  const filterPost = (items, term, filter, condition) => {
    if (term.length === 0) {
      return items;
    }

    switch (condition) {
      case 'more':
        return items.filter(item => item[filter] > term);
      case 'less':
        return items.filter(item => item[filter] < term);
      case 'equals':
        return items.filter(item => item[filter] == term);
      case 'include':
        return items.filter(item => {
          console.log(item[filter])
          return item[filter].toString().indexOf(term) > -1;
        })
      default:
        return items;
    }
  }

  const visibleData = filterPost(data, term, filter, condition);
  return (
    <div className="app">

      <div className="search-panel">
        <SearchPanel onUpdateSearch={setTerm} />
        <AppFilter
          onFilterSelect={setFilter}
          onConditionSelect={setCondition}
        />
      </div>

      <EmployeesList
        data={visibleData}
      />
    </div>
  );
}

export default App;
