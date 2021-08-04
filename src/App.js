import React from 'react';
import Modal from './components/Modal/Modal'
import Triangle from './components/Triangle/triangle';
import Tools from './components/Tools/Tools'
import WebsiteSlider from './components/WebsiteExample/WebsiteSlider/WebsiteSlider';

function App() {

  const [showModal, toggleShowModal] = React.useState(null)
  const [modalTrigger, triggerModal] = React.useState(null)

  const closeNavList = () => {
  const burgerList = document.querySelector(".nav-links-list")
    if(showModal){
      toggleModal()
    }
    setTimeout(() => {
      burgerList.classList.toggle("links-list-display")
    }, 200);
  }

  const toggleModal = () => {
      let delay = 0
      const burgerList = document.querySelector(".nav-links-list")
      if(burgerList.classList.contains("links-list-display")){
        burgerList.classList.remove("links-list-display")
        delay = 200
      }
      setTimeout(() => {
        triggerModal(true);
        toggleShowModal(!showModal)
      }, delay);
  
  }

  return (
    <div className="App">
      <Modal 
       close={toggleShowModal}
       showModal={showModal}
       triggered={modalTrigger}
      />
      <nav id="nav" className="nav-container">
        <div className="nav-logo">
          <a onClick={() => { if(showModal)toggleModal() } } href="#kv">Andrius Svilys</a>
        </div>
        <div className="nav-links-container">
          <div className="nav-links-hamburger"
            onClick={() => {
              closeNavList()
            }}
          >
            <img src="icons/burger.svg" alt="hamburger menu icon" />
          </div>
          <ul className="nav-links-list">
              <li className="nav-links-listItem" >
                <a onClick={() => closeNavList()} href="#projects">projects</a>
              </li>
              <li className="nav-links-listItem" >
                <a onClick={() => closeNavList()} href="#tools">Toolbox</a>
              </li>
              <li className="nav-links-listItem" >
                <a onClick={() => closeNavList()} href="#about">About</a>
              </li>
              <li className="nav-links-listItem" >
                {/* <a onClick={() => closeNavList()} href="#contact">Contact</a> */}
                <button onClick={() => {
                  toggleModal()
                }}>Contact</button>
              </li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="kv" className="kv-container">
          <div className="kv-wrapper">

            <div className="kv-text">

              <h1>My name is Andrius.</h1>
              <h3>I am a front-end developer.</h3>

              <div className={"kv-buttons"}>

                <button className="CTA_secondary">
                  <a href="#projects">
                    see my work
                  </a>
                </button>

                <button 
                  className="CTA-contact CTA"
                  onClick={() => {
                    toggleModal()
                  }}>
                  <span>get in touch</span>
                </button>

              </div>

            </div>

            <div className="kv-image">
              <Triangle />
            </div>

          </div>
          
        </section>

        <section>
        
        <h1 className="headline">
          projects
        </h1>

        <div id="projects" className={"section-wrapper"}>

          <WebsiteSlider 
          thumbnails={[
            "carousel/andriussvilys/personalWebsite-2.png", 
            "carousel/admin/admin-1.png", 
            "carousel/image-search/Screenshot-desktop-1.png", 
            "carousel/devChallenge/dev-challenge-1.png",
            "carousel/responsive/responsive-eg-1.jpg",
            "carousel/t-pose/t-pose-desktop-1.png", 
          ]}
          />
        </div>

        </section>

        <section>

          <h1 className="headline">
            Toolbox
          </h1>

          <div id="tools" className={"section-wrapper"}>

          <Tools 
            data={[
              {
                title: "Front-end", 
                list: [
                  {title: "HTML5", img: "HTML5.png"},
                  {title: "JavaScript", img: "js.png"},
                  {title: "React JS", img: "react.svg"}, 
                  {title: "Redux", img: "redux.svg"},
                  {title: "CSS3", img: "CSS3.png"},
                  {title: null,
                  // title: null, 
                  img: "sass.svg"},
                ]
              },
              {title: "Back-end",
                list: [
                  {title: null,
                  // title: "Node.js", 
                  img: "node-js.svg"},
                  {title: "Postman", img: "postman.png"},
                  {title: "express.js"},
                ]
              },
              {
                title: "Graphic design", 
                list: [
                  {title: "PhotoShop", img: "photoshop.png"}, 
                  {title: "Illustrator", img: "illustrator.png"},
                  {title: "Figma", img: "figma.png"},
                ]
              },
              {
                title: "Other",
                list: [
                  {title: null,
                  // title: "git", 
                  img: "git.png"},
                  {title: null, 
                  // title: "NPM", 
                  img: "npm.png"},
                  {title: null,
                  // title: "MongoDB", 
                  img: "mongodb.png"},
                  {title: "Digital Ocean", img: "digital-ocean.png"},
                  {title: "AEM", img: "AEM.png"},
                  {title: "VSCode", img: "vscode.png"},
                  {title: null,
                  // title: "Jira", 
                  img: "jira.png"},
                ]
              }
            ]}
          />

          </div>

        </section>
        
        <section className="about-container">

          <h1 className="headline">
            ABOUT
          </h1>

          <div id="about" className={"section-wrapper"}>

            <div className="about-wrapper">
              <div className="about-image-wrapper">
                <img className="about-image" alt="portrait" />
              </div>
              <div className="about-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                  <button 
                    className="CTA-contact CTA"
                    onClick={() => {
                      toggleModal()
                    }}>
                    get in touch
                  </button>
                </div>
              </div>

            </div>

        </section>

      <footer></footer>
      </main>

    </div>
  );
}

export default App;
