import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";

function ListGroup() {
  //   const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;

  // Hook
  //   useState-1)

  // Event handling
  //   const handleClick = (event: MouseEvent) => console.log(event);
  //   items = [];

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );

  //   const message = items.length === 0 ? <p>No item found</p> : null;
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(selectedIndex = index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
