import { Link } from 'react-router-dom'

const WaterListings = (props) => {
  return (
    <div className="boat-grid">
      {props.waters.map((water) => (
        <div className="boat-card" key={water._id}>
          <Link to={`${water._id}`}>
            <img className="listing-img" src={water.image} alt={water.name} />
            <h3>{water.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default WaterListings
