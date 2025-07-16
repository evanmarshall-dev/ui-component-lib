const ListItems = ({ customer, amount, isHighest }) => {
  // Conditionally apply style if isHighest is true.
  const listItemStyle = isHighest ? { backgroundColor: "yellow" } : {};

  return (
    <ul>
      <li style={listItemStyle}>
        {customer} : {amount}
      </li>
    </ul>
  );
};

export default ListItems;
