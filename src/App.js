
import './App.css';
//import Fun from './Components/FunctionalComponent';

//On this arrow function fetch from without default export so {} using wrap function name
import {Arrow} from './Components/FunctionalComponent'
import Clz from './Components/ClassComponent'
import Hello from './Components/Jxs'
import Pro from './Components/PropsFunction'
import Prop from './Components/PropsClass'
function App() {
  return (
    <div className="App">
      {/* <Fun />  */}
     <Arrow />
     <Clz />
     <Hello />
   <Pro name="wayan" hero="batman">

<p>crazy looking</p>
   </Pro>

   <Prop name="bunny" pet="bunty">

   <button>sent</button>
   </Prop>
    </div>
  );
}

export default App;
