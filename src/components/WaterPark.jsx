import { Link, useNavigate } from 'react-router-dom'

const WaterPark = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // let navigate = useNavigate()
    props.addWater()
    // navigate('/theme')
  }

  const newWater = props.newWater

  return (
    <div>
      <h1>Add A New Boat Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newWater.name}
          onChange={props.handleChangeWater}
          name={'name'}
          placeholder={'name'}
        />

        <input
          type="text"
          value={newWater.location}
          onChange={props.handleChangeWater}
          name={'location'}
          placeholder={'location'}
        />

        <input
          type="text"
          value={newWater.openingTime}
          onChange={props.handleChangeWater}
          name={'openingTime'}
          placeholder={'opening Time'}
        />

        <input
          type="number"
          value={newWater.noOfRides}
          onChange={props.handleChangeWater}
          name={'noOfRides'}
          placeholder={'number of rides'}
        />

        <input
          type="text"
          value={newWater.mainAttraction}
          onChange={props.handleChangeWater}
          name={'mainAttraction'}
          placeholder={'Main Attraction'}
        />

        <input
          type="text"
          value={newWater.image}
          onChange={props.handleChangeWater}
          name={'image'}
          placeholder={'image'}
        />
        <Link to="/water">
          <button onSubmit={props.addWater} onClick={props.addWater}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  )
}

export default WaterPark
