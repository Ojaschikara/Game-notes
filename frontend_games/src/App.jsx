import { useState } from 'react'

import './App.css'
// import Counter from './Components/Counter'
import ReduxCounter from './Components/redux/ReduxCounter';
import {Provider} from "react-redux";
import store from './Components/redux/ReduxStore';
import Toggle from './Components/Toggle';
// import UseEffectData from './Components/useEffectData';
import CrudData from './Components/useEffectData';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Provider store={store}> */}
      {/* <Counter /> */}
      {/* <ReduxCounter /> */}
    {/* </Provider> */}
    <Toggle />
    {/* <UseEffectData /> */}
    {/* <CrudData /> */}
    </>
  )
}

export default App
