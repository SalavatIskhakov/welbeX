import './app-filter.css';

const AppFilter = (props) => {

  function myFunction(className) {
    document.getElementById(className).classList.toggle("show");
  }

  const buttons =
    <div className="buttons">
      <div class="dropdown">
        <button onClick={() => myFunction("column")} class="dropbtn">колонка</button>
        <div id="column" class="dropdown-content">
          <button>date</button>
          <button>name</button>
          <button>quantity</button>
          <button>distance</button>
        </div>
      </div>
      <div class="dropdown">
        <button onClick={() => myFunction("condition")} class="dropbtn">условие</button>
        <div id="condition" class="dropdown-content">
          <button>равно</button>
          <button>содержит</button>
          <button>больше</button>
          <button>меньше</button>
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
