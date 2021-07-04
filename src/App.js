import './App.css';
import Routing from './Router';
import Sidebar from './components/features/SideBar';
import { Themess } from './context';
import Footer from './components/features/Footer';
import Header from './components/features/Header';
import {useState} from 'react'
import Button from './components/features/Button';

function App() {
  const theThemes = {
    dark: {
      color:"white",
      background:"black"
    },
    light: {
      color:"black",
      background:"white"
    }
  }
  const [theme , setTheme] = useState(theThemes);
  const [isTrue, setIsTrue] = useState(true)
  function toggleThemes(){
   if(isTrue===true){
     setIsTrue(false)
   }
   if(isTrue===false){
    setIsTrue(true)
  }
}

  return (
    <Themess value={{theme,isTrue}} >
    <div className="App">
        <button class="app-btn" onClick={toggleThemes}>Change Theme</button>
        <Header/>
        <Sidebar />
      <Footer />
    </div>
    </Themess>

  );
}

export default App;
