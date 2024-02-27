import { useState, useEffect } from 'react'
import axios from 'axios'
import boatsArray from './data/boats'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Listings from './components/Listings'
import BoatDetails from './components/BoatDetails'
import ThemePark from './components/ThemePark'
import WaterPark from './components/WaterPark'

const App = () => {
  // The boatsArray is passed into state as the initial state for 'boats' in App.js
  const [boats, setBoats] = useState([])
  const [newBoat, setNewBoat] = useState({
    id: '',
    name: '',
    image: '',
    description: '',
    openingTime: '',
    location: '',
    noOfRides: 0,
    mainAttraction: ''
  })

  const getAllListings = async () => {
    let allListings = await axios.get('http://localhost:3001/theme')

    setBoats(allListings.data)
  }

  const getAllListingswater = async () => {
    let allListings = await axios.get('http://localhost:3001/water')

    setBoats(allListings.data)
  }

  useEffect(() => {
    getAllListings()
    getAllListingswater()
  }, [])

  const handleChange = (e) => {
    setNewBoat({ ...newBoat, [e.target.name]: e.target.value })

    // return createdBoat.id
  }
  const addTheme = async () => {
    let res = await axios.post('http://localhost:3001/theme', newBoat)
    console.log(res)
    setBoats([...boats, res.data])
  }
  const addWater = async () => {
    let res = await axios.post('http://localhost:3001/water', newBoat)
    console.log(res)
    setBoats([...boats, res.data])
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theme" element={<Listings boats={boats} />} />
          <Route
            path="/theme/:themePark_id"
            element={<BoatDetails boats={boats} />}
          />
          <Route path="/water" element={<Listings boats={boats} />} />
          <Route
            path="/water/:waterPark_id"
            element={<BoatDetails boats={boats} />}
          />
          <Route
            path="/newThemePark"
            element={
              <ThemePark
                newBoat={newBoat}
                handleChange={handleChange}
                addTheme={addTheme}
              />
            }
          />
          <Route
            path="/newWaterPark"
            element={
              <WaterPark
                newBoat={newBoat}
                handleChange={handleChange}
                addWater={addWater}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
