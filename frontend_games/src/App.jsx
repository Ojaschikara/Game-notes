import { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import "tailwindcss";
import './App.css'
// import Counter from './Components/Counter'
import Toggle from './Components/Toggle';
// import UseEffectData from './Components/useEffectData';
import CrudData from './Components/useEffectData';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import GameNote from './pages/GameNotes';
import { useDispatch, useSelector } from 'react-redux';
import { ADDTOCART } from './redux/actionType';

function App() {
  // const [count, setCount] = useState(0)
  const cart = ["GTA","TEKKEN","PUBG"]
  const countData = useSelector(state=>state.count);
  const cartData = useSelector(state=>state.cart)

  const dispatch = useDispatch();
  console.log(cartData)
  return (
    <>
    {/* <Provider store={store}> */}
      {/* <Counter /> */}
      {/* <ReduxCounter /> */}
    {/* </Provider> */}
    {/* <Toggle /> */}
    {/* <UseEffectData /> */}
    {/* <CrudData /> */}
    {/* {JSON.stringify(countData)} */}
   
      {cart.map((e,i)=>{
        return <div key={i}>
          {e} <button onClick={()=>{dispatch({type:"ADDTOCART",payload:e})}}>Add to Cart</button>

        </div>
      })}
  
    <button onClick={()=>{dispatch({type:'ADD'})}} > + </button>
    <button onClick={()=>{dispatch({type:'SUB'})}} > - </button>

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
