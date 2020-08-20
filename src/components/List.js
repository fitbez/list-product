import React from "react";

const List = (props) => {
  //   console.log(props);
  const result = props.list.filter((grocery) => grocery.purchased);
  console.log(result);
  return (
    <ul className="list-group">
      {result.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
export default List;
