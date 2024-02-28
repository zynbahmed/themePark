import { useNavigate } from "react-router-dom"

const WaterPark = (props) => {
  const handleSubmit = (e) => {
    let navigate = useNavigate()
    props.addBoat(e)
    navigate("/Listings")
  }

  const newBoat = props.newBoat

  return (
    <div>
      <h1>Add A New Water Park</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newBoat.name}
          onChange={props.handleChange}
          name={"name"}
          placeholder={"name"}
        />

        <input
          type="text"
          value={newBoat.location}
          onChange={props.handleChange}
          name={"location"}
          placeholder={"location"}
        />

        <input
          type="text"
          value={newBoat.openingTime}
          onChange={props.handleChange}
          name={"openingTime"}
          placeholder={"opening Time"}
        />

        <input
          type="number"
          value={newBoat.noOfRides}
          onChange={props.handleChange}
          name={"noOfRides"}
          placeholder={"number of rides"}
        />

        <input
          type="text"
          value={newBoat.mainAttraction}
          onChange={props.handleChange}
          name={"mainAttraction"}
          placeholder={"Main Attraction"}
        />

        <input
          type="text"
          value={newBoat.image}
          onChange={props.handleChange}
          name={"image"}
          placeholder={"image"}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default WaterPark
