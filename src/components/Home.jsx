import "../App.css"

const Home = () => {

var  scrollToFamilySection = () => {
    const familySection = document.getElementById('family-section');
    familySection.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="home-vertical">
      <div className="home">
        <div>
          <img
            style={{ display: "block", maxWidth: "100%" }}
            src="https://static.vecteezy.com/system/resources/previews/004/871/170/non_2x/circus-theme-park-on-isolated-background-free-vector.jpg"
            alt="logo"
          />
        </div>
        <div onClick={scrollToFamilySection}>
          <h1>Welcome to Parks</h1>
          <h2>
            Experience the thrill and excitement of our world-class rides and
            attractions.
          </h2>
        </div>
      </div>
      <div id="family-section">
        <h2 >Family Fun</h2>
        <p>
          Create unforgettable memories with your loved ones in our
          family-friendly environment.
        </p>
      </div>
    </div>
    // <div className="container">
    //   <header className="header">
    //     <h1>Welcome to Adventure Theme Park</h1>
    //   </header>
    //   <main className="main">
    //     <section className="section">
    //       <h2>Explore the Adventure</h2>
    //       <p>
    //         Experience the thrill and excitement of our world-class rides and
    //         attractions.
    //       </p>
    //     </section>
    //     <section className="section">
    //       <h2>Family Fun</h2>
    //       <p>
    //         Create unforgettable memories with your loved ones in our
    //         family-friendly environment.
    //       </p>
    //     </section>
    //     <section className="section">
    //       <h2>Events and Shows</h2>
    //       <p>
    //         Don't miss out on our spectacular events and entertaining shows
    //         throughout the day.
    //       </p>
    //     </section>
    //   </main>
    //   <footer className="footer">
    //     <p>Contact us for more information | Follow us on social media</p>
    //   </footer>
    // </div>
  )
}

export default Home
