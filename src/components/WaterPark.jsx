import { Link, useNavigate } from 'react-router-dom'

const WaterPark = (props) => {
  const newWater = props.newWater

  const handleSubmit = (event) => {
    event.preventDefault()
    // let navigate = useNavigate()
    props.addWater()
    // navigate('/theme')
    props.setNewWater = {
      name: '',
      image: '',
      description: '',
      openingTime: '',
      location: '',
      noOfRides: 0,
      mainAttraction: '',
      parkTheme: ''
    }
  }

  return (
    <div>
      <h1>Add A New Water Park Listing</h1>
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
          value={newWater.noOfSlides}
          onChange={props.handleChangeWater}
          name={'noOfSlides'}
          placeholder={'Number of Slides'}
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
          value={newWater.parkTheme}
          onChange={props.handleChangeWater}
          name={'parkTheme'}
          placeholder={'Water Park Theme'}
        />
        <input
          type="text"
          value={newWater.description}
          onChange={props.handleChangeWater}
          name={'description'}
          placeholder={'Enter a description'}
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
