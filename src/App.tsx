import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  //Showing a dismissbable Alert
  const [alertVisible, setAlertVisiblilty] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={ () => setAlertVisiblilty(false) }>"Hi , I am a dismissbable Alert"</Alert>}
      <Button color="secondary" onClick={() => setAlertVisiblilty(true)}>
        Click me
      </Button>
    </div>
  );

  /*Button
  return (
    <div>
      <Button color='secondary' onClick={() => console.log("Clicked")}>Click me</Button>
    </div>
  );
*/

  /*Alert
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
  */

  /*ListGroup
  let items = ["New York", "Tokyo", "London", "Paris"];
  let fruits = ["Apple", "Orange", "Custard Apple", "Pappaya"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={fruits}
        heading="Fruits"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
  */
}

export default App;
