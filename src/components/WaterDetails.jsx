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
        <div className="listing-header">
          <h3>Boat ID: {water._id}</h3>
        </div>
        <p>{water.description}</p>
      </div>
      <Link to="/water">Back</Link>
      <Link to="/water">
        <button onSubmit={handleDelete} onClick={handleDelete}>
          Delete Water Park
        </button>
      </Link>
    </div>
  ) : null
}

export default WaterDetails
