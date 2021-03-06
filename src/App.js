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
import  ConditionalRendering  from './Components/ConditionalRendering'
import  List from './Components/List'
import StyleSheet from './Components/StyleSheet'
import InlineStyle from './Components/InlineStyle'
import styles from "./Components/appStyles.module.css";
import './Components/appStyles.css'
import HooksCounter from "./Hooks/useStateHook";
import HooksCountMore from "./Hooks/useStatePreviousHook";
import UseStateObjectHook from './Hooks/useStateObjectHook'
import UseStateArrayHook from './Hooks/useStateArrayHook'
import  UseEffectHook from './Hooks/useEffectHook'
import RunEffectOnlyOne from './Hooks/RunEffectOnlyOne'
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
      <br></br>
      {/* methodes for props */}
      <ParentComponent />


      < ConditionalRendering  />

      < List />

      <StyleSheet primary='true' />

      <InlineStyle />

   

      <h1 className='error'>error</h1>

      <h1 className={styles.sucssess}>Sucssess</h1>


      <HooksCounter />
      <HooksCountMore />

     < UseStateObjectHook />

     < UseStateArrayHook />
     < UseEffectHook />

     <RunEffectOnlyOne />
     
    </div>
  );
}

export default App;
