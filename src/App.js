import React from 'react';
import Modal from './components/Modal/Modal'
import Triangle from './components/Triangle/triangle';
import Tools from './components/Tools/Tools'
import WebsiteExample from './components/WebsiteExample/WebsiteExample'
import Contact from './components/Contact/Contact';
import Selector from './components/WebsiteExample/Selector/Selector';
import WebsiteSlider from './components/WebsiteExample/WebsiteSlider/WebsiteSlider';

function App() {

  const burgerList = document.querySelector(".nav-links-list")

  const [showModal, toggleShowModal] = React.useState(null)
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
        toggleShowModal(!showModal)
      }, delay);
  
  }
  return (
    <div className="App">
      <Modal 
       close={toggleShowModal}
       showModal={showModal}
      />
      <nav id="nav" className="nav-container">
        <div className="nav-logo">
          <a onClick={() => { if(showModal)toggleModal() } } href="#kv">Andrius Svilys</a>
        </div>
        <div className="nav-links-container">
          <div className="nav-links-hamburger"
            onClick={() => {
              // toggleModal()
              // document.querySelector(".nav-links-list").classList.toggle("links-list-display")
              closeNavList()
            }}
          >
            <img src="icons/burger.svg" alt="hamburger menu icon" />
          </div>
          <ul className="nav-links-list">
              <li className="nav-links-listItem" >
                <a onClick={() => closeNavList()} href="#examples">Examples</a>
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

              <button 
                  className="CTA-contact"
                  onClick={() => {
                    toggleModal()
                  }}>
                  get in touch
                </button>
            </div>

            <div className="kv-image">
              <Triangle />
            </div>

          </div>

            <div className="CTA-seemore">
              <a href="#examples" className="CTA-seemore-text">See my work</a>
              <span className="CTA-seemore-line"></span>
            </div>
        </section>

        <section id="examples">
          <h1 className="headline">
            EXAMPLES
          </h1>
    
          <Selector 
              imageList={
                [
                  "andriussvilys/personalWebsite-2.png",
                  "admin/admin-1.png", 
                  "image-search/Screenshot-desktop-1.png",
                  "devChallenge/dev-challenge-1.png",
                  "responsive/responsive-eg-1.jpg",
                  "t-pose/t-pose-desktop-1.png"
                ]
              }
          />
          <WebsiteSlider />
          {/* <WebsiteExample 
            open={true}
            id={"personal-website"}
            title={"Image archive"}
            assetDir={"andriussvilys"}
            href={"https://andriussvilys.com"}
            imageList={
              [
                "personalWebsite-2.png", 
                "personalWebsite-3.png", 
                "personalWebsite-4.png",
                "personalWebsite-5.png", 
                "personalWebsite-6.jpg",
                "personalWebsite-7.jpg", 
                "personalWebsite-8.jpg",
                "personalWebsite-9.jpg", 
                "personalWebsite-10.jpg",
              ]
            }
            badges={{
              badges: [{title: "React JS", img: "react.svg"}, {title: null, img: "sass.svg"}, {title: "Digital Ocean", img: "digital-ocean.png"}, ],
              other: ["React-slick", "filters", "Tags", "Related images"]
            }}
          />*/}
        </section>

        <section id="tools" >
          <h1 className="headline">Toolbox</h1>
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
        </section>
        
        <section className="about-container" id="about">
          <h1 className="headline">
            ABOUT
          </h1>
          <div className="about-wrapper">
            <div className="about-image-wrapper">
              <img className="about-image" alt="portrait" />
            </div>
            <div className="about-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <button 
                  className="CTA-contact"
                  onClick={() => {
                    toggleModal()
                  }}>
                  get in touch
                </button>
              </div>
            </div>
        </section>

      <footer></footer>
      </main>

    </div>
  );
}

export default App;
