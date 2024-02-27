import { useState, useEffect } from 'react'
import axios from 'axios'
import boatsArray from './data/boats'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Listings from './components/Listings'
import WaterListings from './components/WaterListings'
import BoatDetails from './components/BoatDetails'
import WaterDetails from './components/WaterDetails'
import ThemePark from './components/ThemePark'
import WaterPark from './components/WaterPark'

const App = () => {
  // The boatsArray is passed into state as the initial state for 'boats' in App.js
  const [boats, setBoats] = useState([])
  const [newBoat, setNewBoat] = useState({
    name: '',
    image: '',
    description: '',
    location: '',
    mainAttraction: ''
  })

  const [waters, setWaters] = useState([])
  const [newWater, setNewWater] = useState({
    name: '',
    image: '',
    description: '',
    openingTime: '',
    location: '',
    noOfRides: 0,
    mainAttraction: '',
    parkTheme: ''
  })

  const getAllListings = async () => {
    let allListings = await axios.get('http://localhost:3001/theme')
    console.log(allListings.data)
    setBoats(allListings.data)
  }

  const getAllListingswater = async () => {
    let allListings = await axios.get('http://localhost:3001/water')

    setWaters(allListings.data)
  }

  useEffect(() => {
    getAllListings()
    getAllListingswater()
  }, [boats, waters])

  const handleChange = (e) => {
    setNewBoat({ ...newBoat, [e.target.name]: e.target.value })

    // return createdBoat.id
  }

  const handleChangeWater = (e) => {
    setNewWater({ ...newWater, [e.target.name]: e.target.value })

    // return createdBoat.id
  }
  const addTheme = async () => {
    let res = await axios.post('http://localhost:3001/theme', newBoat)
    console.log(res)
    setBoats([...boats, res.data])
  }
  const addWater = async () => {
    let res = await axios.post('http://localhost:3001/water', newWater)
    console.log(res)
    setWaters([...waters, res.data])
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
          <Route path="/water" element={<WaterListings waters={waters} />} />
          <Route
            path="/water/:waterPark_id"
            element={<WaterDetails waters={waters} />}
          />
          <Route
            path="/newThemePark"
            element={
              <ThemePark
                newBoat={newBoat}
                setNewBoat={setNewBoat}
                handleChange={handleChange}
                addTheme={addTheme}
              />
            }
          />
          <Route
            path="/newWaterPark"
            element={
              <WaterPark
                newWater={newWater}
                setNewWater={setNewWater}
                handleChangeWater={handleChangeWater}
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
