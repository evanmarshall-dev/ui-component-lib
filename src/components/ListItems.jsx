const ListItems = ({ customer, amount }) => {
  return (
    <ul>
      <li>
        {customer} : {amount}
      </li>
    </ul>
  );
};

export default ListItems;
