import { useState } from 'react';
import {Routes,Route} from 'react-router-dom'

import './App.css'
// import Counter from './Components/Counter'
import ReduxCounter from './Components/redux/ReduxCounter';
import {Provider} from "react-redux";
import store from './Components/redux/ReduxStore';
import Toggle from './Components/Toggle';
// import UseEffectData from './Components/useEffectData';
import CrudData from './Components/useEffectData';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import GameNote from './pages/GameNotes';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Provider store={store}> */}
      {/* <Counter /> */}
      {/* <ReduxCounter /> */}
    {/* </Provider> */}
    {/* <Toggle /> */}
    {/* <UseEffectData /> */}
    {/* <CrudData /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gamenotes" element={<GameNote />} />
    </Routes>
    </>
  )
}

export default App
