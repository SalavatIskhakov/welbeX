import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';

import './app.css';

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('name');
  const [condition, setCondition] = useState('include');
  const [i, setI] = useState(0)
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      console.log('fetching')
      axios.get(`http://localhost:3004/posts?_start=${i}&_limit=20`)
        .then(res => {
          setData([...data, ...res.data]);
          setI(i => i + 20);
          setTotalCount(res.headers['x-total-count']);
        })
        .finally(() => setFetching(false));
    }

  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  })

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
    && data.length < totalCount) {
      setFetching(true);
    }
  }

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
          filter={filter}
          condition={condition}
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
