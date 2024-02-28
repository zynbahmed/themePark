import { Link, useNavigate } from 'react-router-dom'

const ThemePark = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // let navigate = useNavigate()
    props.addTheme()
    // navigate('/theme')
    props.setNewBoat = {
      name: '',
      image: '',
      description: '',
      location: '',
      mainAttraction: ''
    }
  }

  const newBoat = props.newBoat

  return (
    <div>
      <h1 className='formTitle'>Add A New Theme Park</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newBoat.name}
          onChange={props.handleChange}
          name={'name'}
          placeholder={'Enter The Name of The Water Park'}
        />

        <input
          type="text"
          value={newBoat.location}
          onChange={props.handleChange}
          name={'location'}
          placeholder={'Enter The Location of The Water Park'}
        />

        <input
          type="text"
          value={newBoat.mainAttraction}
          onChange={props.handleChange}
          name={'mainAttraction'}
          placeholder={'Enter The Main Attraction of The Water Park'}
        />
        <textarea 
          value={newBoat.description}
          onChange={props.handleChange}
          name={'description'}
          placeholder={'Enter The Description of The Water Park'}
          cols="117"
        />

        <input
          type="text"
          value={newBoat.image}
          onChange={props.handleChange}
          name={'image'}
          placeholder={'Enter The Image of The Water Park'}
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
