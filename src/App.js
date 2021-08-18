import React from 'react';
import Modal from './components/Modal/Modal'
import Triangle from './components/Triangle/triangle';
import Tools from './components/Tools/Tools'
import WebsiteSlider from './components/WebsiteExample/WebsiteSlider/WebsiteSlider';

function App() {

  const [showModal, toggleShowModal] = React.useState(null)
  const [modalTrigger, triggerModal] = React.useState(null)

  const [navLinks, showLinks] = React.useState(null)

  const linksListRef = React.useRef()

  const toggleNavList = (options) => {

    let delay = showModal ? 200 : 0;

    if(showModal)
    {
      toggleModal()
    }

    setTimeout(() => {
      if(options && options.onlyClose === true){
        showLinks(false)
      }
      else
      {
        showLinks(!navLinks)
      }
    }, delay);

  }

  const toggleModal = () => {

      let delay = 0

      if(navLinks){
        toggleNavList(false)
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

        <div className={"nav-wrapper"}>

          <div className="nav-logo">
            <a 
              onClick={() => { 
                toggleNavList({onlyClose: true})
              }}  
              href="#kv"
            >
              Andrius Svilys
            </a>
          </div>

          <div className="nav-links-container">

            <div className="nav-links-hamburger"
              onClick={() => {
                toggleNavList()
              }}
            >
              <img src="icons/burger.svg" alt="hamburger menu icon" />

            </div>

              <div 
                className={`nav-links-list-wrapper ${navLinks ? "fadeIn" : "fadeOut"}`}
                ref={linksListRef}
              >

                <ul 
                  className={`nav-links-list ${navLinks ? "slideIn_rightToLeft" : "slideOut_leftToRight"}`}
                >
                    <li className="nav-links-listItem" >
                      <a 
                        onClick={() => toggleNavList({onlyClose: true})} 
                        href="#projects">
                          Projects
                      </a>
                    </li>

                    <li className="nav-links-listItem" >
                      <a 
                        onClick={() => toggleNavList({onlyClose: true})} 
                        href="#tools">
                          Toolbox
                      </a>
                    </li>

                    <li className="nav-links-listItem" >
                      <a 
                        onClick={() => toggleNavList({onlyClose: true})} 
                        href="#about">
                          About
                      </a>
                    </li>

                    <li className="nav-links-listItem" >
                      <button onClick={() => {
                        toggleModal()
                        // toggleNavList({onlyClose: true})

                      }}>
                        <span>Contact</span>
                      </button>
                    </li>

                </ul>

              </div>
          
          </div>
        </div>


      </nav>

      <main>
        <section id="kv" className="kv-container">
          <div className="kv-wrapper">

            <div className="kv-text">

              <h1>My name is Andrius.</h1>
              <h3>I am a web developer.</h3>

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
                  img: "nodejs.png"},
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
                <img className="about-image" alt="portrait" src="20201208_010458.jpg"/>
                {/* <img className="about-image" alt="portrait" /> */}
              </div>
              <div className="about-description">
                  <p>
                    I've first become interested in web development in 2018. Since then, I have completed an introductory course to digital design (2018) and worked at an international marketing agency in Warsaw (2019 - 2020). During my free time I kept on learning and trained my skills on a number of personal web projects. Finally I decided that I have to dive deeper into this discipline and in 2020 joined a computer science course in Vilnius University!
                  <br/>
                  <br/>
                    Before all this, I lived a handful of years in London, where I earned a bachelor's degree in Fine Art. In fact, my interest in digital development began with a simple wish to make a website for my artwork. 
                  <br/>
                  <br/>
                    Please feel free to get in touch for collaborations or job offers. 
                  </p>

                  <button 
                    className="CTA-contact CTA"
                    onClick={() => {
                      toggleModal()
                    }}>
                    <span>get in touch</span>
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
