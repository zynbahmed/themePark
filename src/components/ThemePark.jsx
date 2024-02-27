import { Link, useNavigate } from 'react-router-dom'

const ThemePark = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // let navigate = useNavigate()
    props.addTheme()
    // navigate('/theme')
  }

  const newBoat = props.newBoat

  return (
    <div>
      <h1>Add A New Boat Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newBoat.name}
          onChange={props.handleChange}
          name={'name'}
          placeholder={'name'}
        />

        <input
          type="text"
          value={newBoat.location}
          onChange={props.handleChange}
          name={'location'}
          placeholder={'location'}
        />

        <input
          type="text"
          value={newBoat.openingTime}
          onChange={props.handleChange}
          name={'openingTime'}
          placeholder={'opening Time'}
        />

        <input
          type="number"
          value={newBoat.noOfRides}
          onChange={props.handleChange}
          name={'noOfRides'}
          placeholder={'number of rides'}
        />

        <input
          type="text"
          value={newBoat.mainAttraction}
          onChange={props.handleChange}
          name={'mainAttraction'}
          placeholder={'Main Attraction'}
        />

        <input
          type="text"
          value={newBoat.image}
          onChange={props.handleChange}
          name={'image'}
          placeholder={'image'}
        />
        <Link to="/theme">
          <button onSubmit={props.addTheme} onClick={props.addTheme}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  )
}

export default ThemePark
