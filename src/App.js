import logo from './logo.svg';
import './App.css';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import CustomObject from './component/CutomObject'
import StyleSheet from './component/StyleSheet'
import Registration from './component/RegistrationForm'

function App() {
  return (
    <div className="App">
      <UserGreeting></UserGreeting>
      <NameList></NameList>
      <CustomObject></CustomObject>
      <StyleSheet className="primary"></StyleSheet>
      <Registration></Registration>
    </div>
  );
}

export default App;
