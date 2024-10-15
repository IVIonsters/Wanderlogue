import './App.css'
import Navbar from './components/Navbar/navbar.jsx'
import CityCard from './components/cityCard/cityCard.jsx'
import cityInfo from './utils/cityInfo.js'

function App() {

  // log data to verify
  // console.log(cityInfo)

  const cityArray = cityInfo.map(city => (
    <CityCard key={city.id} city={city} />
  ))

  return (
    <>
      <Navbar />
      {cityArray}
    </>
  )
}

export default App
