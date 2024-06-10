import './App.css'
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import List from './components/List'
import Arrow from './assets/json/arrow.json'

function App() {

  return (
    <div className='container'>
      <div className='left-side'>
        <ReactTyped
          strings={[
            "Test per Glaut",
            "Giovanni Cristian Marrocco",
            "Junior Frontend Engineer",
          ]}
          typeSpeed={80}
          backSpeed={60}
          loop
          className='typed'
        />
        <Lottie animationData={Arrow} style={{width: '40%'}}/>
      </div>
      <div className='right-side'>
        <h1>Make Your List</h1>
        <List />
      </div>
    </div>
  )
}

export default App
