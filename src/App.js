

import './App.css';
import UseMemo from './components/UseMemo';
import Routing from './routing/Routing';
// #grad1 {
//   height: "200px";
//   background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
//}
//my application
function App() {
  return (
    <div className="App">
     {/* <Routing/> */}
     <UseMemo/>
    </div>
  );
}

export default App;
