import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const BoatDetails = (props) => {
  const [boat, setBoat] = useState('')

  let { themePark_id } = useParams()
  console.log(themePark_id)

  let navigate = useNavigate()

  useEffect(() => {
    themeDetails()
  }, [props.boats, themePark_id])

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/theme/${themePark_id}`)
    navigate('/theme')
  }
  const themeDetails = async () => {
    let selectedTheme = await axios.get(
      `http://localhost:3001/theme/${themePark_id}`
    )
    setBoat(selectedTheme.data)
    console.log(selectedTheme.data)
  }

  return boat ? (
    <div className="detail">
      <div className="detail-header">
        <img src={boat.image} alt={boat.name} />
        <div className="listing-name">
          <h1>{boat.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <p>
          <strong>Location: </strong>
          {boat.location}
        </p>
        <p>
          <strong>Main Attraction: </strong>
          {boat.mainAttraction}
        </p>
        <p>{boat.description}</p>
      </div>
      <button onSubmit={handleDelete} onClick={handleDelete}>
        Delete Theme Park
      </button>
    </div>
  ) : null
}

export default BoatDetails
