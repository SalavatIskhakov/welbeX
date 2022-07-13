import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const { date, name, quantity, distance } = props;

  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{distance}</td>
    </tr>);
}

export default EmployeesListItem;
