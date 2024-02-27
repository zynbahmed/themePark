import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const BoatDetails = (props) => {
  const [boat, setBoat] = useState('')

  let { id } = useParams()
 

  useEffect(() => {
    let selectedBoat = props.boats.find((boat) => boat.id === parseInt(id))
    setBoat(selectedBoat)
  }, [props.boats, id])

  return boat ? (
    <div className="detail">
      <div className="detail-header">
        <img src={boat.img} alt={boat.name} />
        <div className="listing-name">
          <h1>{boat.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div className="listing-header">
          <h3>Price: ${boat.price}</h3>
          <h3>Boat ID: {boat.id}</h3>
        </div>
        <p>{boat.description}</p>
      </div>
      <Link to="/Listings">Back</Link>
    </div>
  ) : null
}

export default BoatDetails
