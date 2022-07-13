import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data }) => {

  const elements = data.map(item => {
    const { id, ...itemPromps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemPromps}
      />
    );
  });

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Distance</th>
        </tr>
      </thead>
      <tbody>
        {elements}
      </tbody>
    </table>
  );
}

export default EmployeesList;
