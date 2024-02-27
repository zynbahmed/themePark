import { Link } from 'react-router-dom'

const Listings = (props) => {
  return (
    <div className="boat-grid">
      {props.boats.map((boat) => (
        <div className="boat-card" key={boat._id}>
          <Link to={`${boat._id}`}>
            <img className="listing-img" src={boat.image} alt={boat.name} />
            <h3>{boat.name}</h3>
          </Link>
        </div>
      ))}
      <Link to="/">Back</Link>
    </div>
  )
}

export default Listings
