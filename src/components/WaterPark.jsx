import { Link, useNavigate } from 'react-router-dom'

const WaterPark = ({newWater, setNewWater, handleChangeWater, addWater}) => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    addWater()
    setNewWater({
      name: '',
      image: '',
      description: '',
      openingTime: '',
      location: '',
      noOfSlides: 0,
      mainAttraction: '',
      parkTheme: ''
    })
    navigate('/water')
  }

  return (
    <div>
      <h1 className="formTitle">Add A New Water Park</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newWater.name}
          onChange={handleChangeWater}
          name={'name'}
          placeholder={'Enter The Name of The Water Park'}
        />

        <input
          type="text"
          value={newWater.location}
          onChange={handleChangeWater}
          name={'location'}
          placeholder={'Enter The Location of The Water Park'}
        />

        <input
          type="text"
          value={newWater.openingTime}
          onChange={handleChangeWater}
          name={'openingTime'}
          placeholder={'Enter The Opening Time of The Water Park'}
        />

        <input
          type="number"
          value={newWater.noOfSlides}
          onChange={handleChangeWater}
          name={'noOfSlides'}
          placeholder={'Enter The Number of Slides of The Water Park'}
        />

        <input
          type="text"
          value={newWater.mainAttraction}
          onChange={handleChangeWater}
          name={'mainAttraction'}
          placeholder={'Enter The Main Attrcation of The Water Park'}
        />
        <input
          type="text"
          value={newWater.parkTheme}
          onChange={handleChangeWater}
          name={'parkTheme'}
          placeholder={'Enter The Theme of The Water Park'}
        />
        <textarea
          type="text"
          value={newWater.description}
          onChange={handleChangeWater}
          name={'description'}
          placeholder={'Enter The Description of The Water Park'}
          cols="96"
        />

        <input
          type="text"
          value={newWater.image}
          onChange={handleChangeWater}
          name={'image'}
          placeholder={'Enter The Image of The Water Park'}
        />
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

export default WaterPark
