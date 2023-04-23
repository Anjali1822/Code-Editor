
import './App.css';
//components
import Home from './components/Home';
import DataProvider from './context/DataProvider';  //Home is wrapped with it
import Modal from './components/Modal';

//then components of Home under them access is of DataProvider States.  

function App() {
  return (
    <DataProvider>
      <Home/>
      <Modal/>
    </DataProvider> 
  );
}

export default App;

//Data is passed as a children 
//DataProvider is a component if we pass anything then it is called as props 