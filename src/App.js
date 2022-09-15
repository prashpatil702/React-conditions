import logo from './logo.svg';
import './App.css';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import CustomObject from './component/CutomObject'

function App() {
  return (
    <div className="App">
      <UserGreeting></UserGreeting>
      <NameList></NameList>
      <CustomObject></CustomObject>
    </div>
  );
}

export default App;
