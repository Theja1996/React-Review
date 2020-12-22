import "./App.css";
//import Fun from './Components/FunctionalComponent';

//On this arrow function fetch from without default export so {} using wrap function name
import { Arrow } from "./Components/FunctionalComponent";
import Clz from "./Components/ClassComponent";
import Hello from "./Components/Jxs";
import Pro from "./Components/PropsFunction";
import Prop from "./Components/PropsClass";
import St from "./Components/StateClass";
import Set from "./Components/SetStateClass";
import Depro from "./Components/DestructuredPropsFunction";
import Deprop from "./Components/DestructuredPropsClass";
import FunEvent from "./Components/FunctionlEvent";
import ClzEvent from "./Components/ClassEvent";
import ClzEventBinding from "./Components/ClassEventBinding";
import ParentComponent from "./Components/ParentComponent";
function App() {
  return (
    <div className="App">
      {/* functioanl component normal and arrow function called */}
      {/* <Fun />  */}
      <Arrow />

      {/* class component class called */}
      <Clz />

      {/* jxs formate */}
      <Hello />

      {/* Functional  component props */}
      <Pro name="wayan" hero="batman">
        <p>crazy looking</p>
      </Pro>

      {/* Class component props */}
      <Prop name="bunny" pet="bunty">
        <button>sent</button>
      </Prop>

      {/* class component state  */}
      <St />

      <br></br>
      {/* class component setState data binding with arrow function */}
      <Set />

      {/* Functional  component props Destructuring */}
      <Depro name="The LastShip" hero="nethon-jems "></Depro>

      {/* Class component props Destructuring  */}
      <Deprop name="BlackList" hero="Elisabeth"></Deprop>

      {/* Functional  component event handling*/}
      <FunEvent />

      {/* Class component  event handling  */}
      <ClzEvent />

      {/* Class component  event binding  without using arrow funcion */}
      <ClzEventBinding />

      {/* methodes for props */}
      <ParentComponent />
    </div>
  );
}

export default App;
