import './app-filter.css';

const AppFilter = (props) => {
  const { onFilterSelect, onConditionSelect } = props;

  function myFunction(className) {
    document.getElementById(className).classList.toggle("show");
  }

  const buttons =
    <div className="buttons">
      <div className="dropdown">
        <button onClick={() => myFunction("column")} className="dropbtn">колонка</button>
        <div id="column" className="dropdown-content">
          <button onClick={() => onFilterSelect('name')}>name</button>
          <button onClick={() => onFilterSelect('quantity')}>quantity</button>
          <button onClick={() => onFilterSelect('distance')}>distance</button>
        </div>
      </div>
      <div className="dropdown">
        <button onClick={() => myFunction("condition")} className="dropbtn">условие</button>
        <div id="condition" className="dropdown-content">
          <button onClick={() => onConditionSelect('include')}>содержит</button>
          <button onClick={() => onConditionSelect('equals')}>равно</button>
          <button onClick={() => onConditionSelect('more')}>больше</button>
          <button onClick={() => onConditionSelect('less')}>меньше</button>
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
