import React from 'react'
import Card from './components/Card'
import img1 from './assets/download1.jpg';
import img2 from './assets/133837268262356658.jpg'
import img3 from './assets/133844552670430452.jpg'
import img4 from './assets/pexels-craig-adderley-1563355.jpg'
import img5 from './assets/pexels-katie-burandt-1212693.jpg'
const App = () => {
  return (
    <div className='parent'>
      <Card user="Bhumika" age={21} img={img1}/>
        <Card user='LC' age={21} img={img2}/>
        <Card user='Alice' age={25} img={img4}/>
        <Card user='Bob' age={30} img={img5}/>
        <Card user='Charlie' age={35} img={img3}/>
      
    </div>
  )
}

export default App
