import './App.css';
import {Basket} from "./components/basket/Basket";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./components/MainPage";
import {useState} from "react";

function App() {

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <div className="App">
      <Routes>
        <Route path='' element={<MainPage open={open} setOpen={setOpen} message={message} setMessage={setMessage}/>}/>
        <Route path='/basket' element={<Basket setOpen={setOpen} setMessage={setMessage}/>}/>
      </Routes>
    </div>
  );
}

export default App;
