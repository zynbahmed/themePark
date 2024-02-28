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
      noOfSlides: 0,
      mainAttraction: '',
      parkTheme: ''
    }
  }

  return (
    <div>
      <h1 className="formTitle">Add A New Water Park</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newWater.name}
          onChange={props.handleChangeWater}
          name={'name'}
          placeholder={'Enter The Name of The Water Park'}
        />

        <input
          type="text"
          value={newWater.location}
          onChange={props.handleChangeWater}
          name={'location'}
          placeholder={'Enter The Location of The Water Park'}
        />

        <input
          type="text"
          value={newWater.openingTime}
          onChange={props.handleChangeWater}
          name={'openingTime'}
          placeholder={'Enter The Opening Time of The Water Park'}
        />

        <input
          type="number"
          value={newWater.noOfSlides}
          onChange={props.handleChangeWater}
          name={'noOfSlides'}
          placeholder={'Enter The Number of Slides of The Water Park'}
        />

        <input
          type="text"
          value={newWater.mainAttraction}
          onChange={props.handleChangeWater}
          name={'mainAttraction'}
          placeholder={'Enter The Main Attrcation of The Water Park'}
        />
        <input
          type="text"
          value={newWater.parkTheme}
          onChange={props.handleChangeWater}
          name={'parkTheme'}
          placeholder={'Enter The Theme of The Water Park'}
        />
        <textarea
          type="text"
          value={newWater.description}
          onChange={props.handleChangeWater}
          name={'description'}
          placeholder={'Enter The Description of The Water Park'}
          cols="96"
        />

        <input
          type="text"
          value={newWater.image}
          onChange={props.handleChangeWater}
          name={'image'}
          placeholder={'Enter The Image of The Water Park'}
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
