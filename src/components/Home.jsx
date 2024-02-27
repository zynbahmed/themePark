import '../App.css'

const Home = () => {
  return (
    // <div className="home">
    //   <div>
    //     <img
    //       style={{ display: 'block', maxWidth: '100%' }}
    //       src="https://static.vecteezy.com/system/resources/previews/000/663/190/original/sailboat-shore-cartoon-vector.jpg"
    //       alt="logo"
    //     />
    //   </div>
    //   <div>
    //     <h1>Starboard</h1>
    //     <h2>
    //       Your luxury boat dealer, bringing you only the best of the high seas.
    //     </h2>
    //   </div>
    // </div>
    <div className="container">
      <header className="header">
        <h1>Welcome to Adventure Theme Park</h1>
      </header>
      <main className="main">
        <section className="section">
          <h2>Explore the Adventure</h2>
          <p>
            Experience the thrill and excitement of our world-class rides and
            attractions.
          </p>
        </section>
        <section className="section">
          <h2>Family Fun</h2>
          <p>
            Create unforgettable memories with your loved ones in our
            family-friendly environment.
          </p>
        </section>
        <section className="section">
          <h2>Events and Shows</h2>
          <p>
            Don't miss out on our spectacular events and entertaining shows
            throughout the day.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>Contact us for more information | Follow us on social media</p>
      </footer>
    </div>
  )
}

export default Home
