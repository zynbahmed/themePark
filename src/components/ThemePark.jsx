import { Link, useNavigate } from 'react-router-dom'

const ThemePark = ({ newBoat, setNewBoat, handleChange, addTheme }) => {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    addTheme()
    setNewBoat({
      name: '',
      image: '',
      description: '',
      location: '',
      mainAttraction: ''
    })
    navigate('/theme')
  }

  return (
    <div>
      <h1 className="formTitle">Add A New Theme Park</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newBoat.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'Enter The Name of The Water Park'}
        />

        <input
          type="text"
          value={newBoat.location}
          onChange={handleChange}
          name={'location'}
          placeholder={'Enter The Location of The Water Park'}
        />

        <input
          type="text"
          value={newBoat.mainAttraction}
          onChange={handleChange}
          name={'mainAttraction'}
          placeholder={'Enter The Main Attraction of The Water Park'}
        />
        <textarea
          value={newBoat.description}
          onChange={handleChange}
          name={'description'}
          placeholder={'Enter The Description of The Water Park'}
          cols="96"
        />

        <input
          type="text"
          value={newBoat.image}
          onChange={handleChange}
          name={'image'}
          placeholder={'Enter The Image of The Water Park'}
        />
        {/* <Link to="/theme"> */}
        <button>Submit</button>
        {/* </Link> */}
      </form>
    </div>
  )
}

export default ThemePark
