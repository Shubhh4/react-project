import React from 'react'
import Resturant from "./components/Basic/Resturant"
import UseState from './components/Basic/hooks/useState'
import UseEffect from './components/Basic/hooks/useEffect'
import UseReducer from './components/Basic/hooks/useReducer'
import Todo from './components/todoreact/todo'
import Temp from './components/weather/temp'
import Weathercard from './components/weather/weathercard'

const App = () => {
  return (
    <div>
     
      <Temp/>
      {/* <Todo/> */}
      {/* <UseReducer/> */}
      {/* <UseEffect/> */}
      {/* <UseState/> */}
      {/* <Resturant/> */}
    </div>
  )
}

export default App
