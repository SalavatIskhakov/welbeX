import { useState } from 'react';

import './search-panel.css';

const SearchPanel = (props) => {
  const [term, setTerm] = useState('')

  const onUpdateSearch = (e) => {
    const term = e.target.value;
    console.log(e.target.value)
    setTerm(term);
    props.onUpdateSearch(term);
  }

  return (
    <input
      type="text"
      // bootstrap
      className="form-control searh-input"
      placeholder="Найти сотрудника"
      value={term}
      onChange={onUpdateSearch}
    />
  );
}

export default SearchPanel;
