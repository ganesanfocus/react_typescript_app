// import ListGroup from "./components/ListGroup";

// import Alert from "./components/Alert";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";


function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

// For alert component

const [alertVisible, setAlertVisibility] = useState(false);
  return (

    <div >
        { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert> }
        <Button onClick={() =>  setAlertVisibility (true)}>My button</Button></div>
    // <div>
    //   <ListGroup
    //     items={items} heading="Cities" onSelectItem={handleSelectItem}
    //   />
    // </div>
  );
}

export default App;
