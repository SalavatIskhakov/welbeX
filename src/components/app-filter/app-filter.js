import { useEffect, useState } from 'react';
import './app-filter.css';

const AppFilter = (props) => {
  const { filter, condition, onFilterSelect, onConditionSelect } = props;
  const [columnClass, serColumnClass] = useState('dropdown-content');
  const [conditionClass, setConditionClass] = useState('dropdown-content');

  function dropdownClick(className, setClassName) {
    let buf = className.split(' ');
    serColumnClass('dropdown-content');
    setConditionClass('dropdown-content');
    if (buf.length === 1) {
      setClassName(`${className} show`);
    }
  }

  useEffect(() => {

  }, [columnClass, conditionClass]);

  const buttons =
    <div className="buttons">
      <div className="dropdown" onBlur={() => setTimeout(() => dropdownClick(columnClass, serColumnClass), 0)}>
        <button
          className="dropbtn"
          onClick={() => dropdownClick(columnClass, serColumnClass)}
        >{filter}
        </button>
        <div className={columnClass}>
          <button onClick={() => { onFilterSelect('name'); dropdownClick(columnClass, serColumnClass); }}>name</button>
          <button onClick={() => { onFilterSelect('quantity'); dropdownClick(columnClass, serColumnClass); }}>quantity</button>
          <button onClick={() => { onFilterSelect('distance'); dropdownClick(columnClass, serColumnClass); }}>distance</button>
        </div>
      </div>
      <div className="dropdown" onBlur={() => setTimeout(() => dropdownClick(conditionClass, setConditionClass), 0)}>
        <button
          className="dropbtn"
          onClick={() => { dropdownClick(conditionClass, setConditionClass) }}
        >{condition}
        </button>
        <div className={conditionClass}>
          <button onClick={() => { onConditionSelect('include'); dropdownClick(conditionClass, setConditionClass); }}>include</button>
          <button onClick={() => { onConditionSelect('equals'); dropdownClick(conditionClass, setConditionClass); }}>equals</button>
          <button onClick={() => { onConditionSelect('more'); dropdownClick(conditionClass, setConditionClass); }}>more</button>
          <button onClick={() => { onConditionSelect('less'); dropdownClick(conditionClass, setConditionClass); }}>less</button>
        </div>
      </div>
    </div>

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

export default AppFilter;
