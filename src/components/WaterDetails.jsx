import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const WaterDetails = (props) => {
  const [water, setWater] = useState('')

  let { waterPark_id } = useParams()

  useEffect(() => {
    const themeDetails = async () => {
      let selectedTheme = await axios.get(
        `http://localhost:3001/water/${waterPark_id}`
      )
      setWater(selectedTheme.data)
      console.log(selectedTheme.data)
    }

    themeDetails()
  }, [props.waters, waterPark_id])

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/water/${waterPark_id}`)
  }

  return water ? (
    <div className="detail">
      <div className="detail-header">
        <img src={water.image} alt={water.name} />
        <div className="listing-name">
          <h1>{water.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <p>
          <strong>Location: </strong> {water.location}
        </p>
        <p>
          <strong>Opening Time: </strong>
          {water.openingTime}
        </p>
        <p>
          <strong>Number of Slides: </strong>
          {water.noOfSlides}
        </p>
        <p>
          <strong>Park Theme: </strong>
          {water.parkTheme}
        </p>
        <p>{water.description}</p>
      </div>
      <Link to="/water">
        <button onSubmit={handleDelete} onClick={handleDelete}>
          Delete Water Park
        </button>
      </Link>
    </div>
  ) : null
}

export default WaterDetails
