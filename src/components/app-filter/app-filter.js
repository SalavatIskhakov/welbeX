import './app-filter.css';

const AppFilter = (props) => {
  const { filter, condition, onFilterSelect, onConditionSelect } = props;

  function myFunction(className) {
    document.getElementById(className).classList.toggle("show");
  }

  const buttons =
    <div className="buttons">
      <div className="dropdown">
        <button onClick={() => myFunction("column")} className="dropbtn">{filter}</button>
        <div id="column" className="dropdown-content">
          <button onClick={() => onFilterSelect('name')}>name</button>
          <button onClick={() => onFilterSelect('quantity')}>quantity</button>
          <button onClick={() => onFilterSelect('distance')}>distance</button>
        </div>
      </div>
      <div className="dropdown">
        <button onClick={() => myFunction("condition")} className="dropbtn">{condition}</button>
        <div id="condition" className="dropdown-content">
          <button onClick={() => onConditionSelect('include')}>include</button>
          <button onClick={() => onConditionSelect('equals')}>equals</button>
          <button onClick={() => onConditionSelect('more')}>more</button>
          <button onClick={() => onConditionSelect('less')}>less</button>
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
