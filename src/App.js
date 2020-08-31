import React from 'react';
import Triangle from './components/Triangle/triangle';
import Tools from './components/Tools/Tools'
import WebsiteExample from './components/WebsiteExample/WebsiteExample'

function App() {
  return (
    <div className="App">
      <nav id="nav" className="nav-container">
        <div className="nav-logo">
          <a href="#kv">Andrius Svilys</a>
        </div>
        <div className="nav-links-container">
          <div className="nav-links-hamburger"
            onClick={() => {
              document.querySelector(".nav-links-list").classList.toggle("links-list-display")
            }}
          ></div>
          <ul className="nav-links-list">
              <li className="nav-links-listItem">
                <a href="#examples">Examples</a>
              </li>
              <li className="nav-links-listItem">
                <a href="#tools">Tools</a>
              </li>
              <li className="nav-links-listItem">
                <a href="#about">About</a>
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

              <a href="#about" className="CTA-contact">get in touch</a>
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
          <WebsiteExample 
            open={true}
            id={"personal-website"}
            title={"Image archive"}
            assetDir={"andriussvilys"}
            href={"https://andriussvilys.com"}
            imageList={
              ["personalWebsite-2.png", 
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
          />
          <WebsiteExample 
            open={false}
            id={"personal-website-admin"}
            title={"Image archive (admin page)"}
            assetDir={"admin"}
            href={"https://andriussvilys.com/admin"}
            imageList={
              ["admin-1.png", 
              "admin-2.png",
              "admin-3.png",
              "admin-4.png",
              ]
            }
            badges={{
              badges: [
                {title: "React JS", img: "react.svg"}, 
                {title: null, img: "node-js.svg"}, 
                {title: null, img: "mongodb.png"},
                {title: null, img: "sass.svg"}
              ],
              other: ["Image upload", "CRUD", "Authorization", "Modals", "Progress bar"]
            }}
          />
          <WebsiteExample 
            open={false}
            id={"image-search"}
            title={"Image search API"}
            assetDir={"image-search"}
            href={"https://andriussvilys.github.io/image-search/"}
            imageList={
              ["Screenshot-desktop-1.png",
                "Screenshot-mobile-1.jpg",
                "Screenshot-mobile-2.jpg",
                "Screenshot-mobile-3.jpg"
              ]
            }
            badges={{
              badges: [{title: "React JS", img: "react.svg"}, {title: "Redux", img: "redux.svg"}, {title: null, img: "sass.svg"}],
              other: ["unsplash-API"]
            }}
          />
          <WebsiteExample 
            open={false}
            id={"dev-challenge"}
            title={"Built from a mockup"}
            assetDir={"devChallenge"}
            href={"https://andriussvilys.github.io/bmb-challenge/"}
            imageList={
              ["dev-challenge-1.png",
              "dev-challenge-3.png",
              "dev-challenge-2.png",
              "dev-challenge-1-mob.jpg",
              "dev-challenge-3-mob.png",
              "dev-challenge-2-mob.png",
              ]
            }
            badges={{
              badges: [{title: "HTML5", img: "HTML5.png"}, {title: null, img: "sass.svg"}, {title: "Parcel compiler", img: "parcel-og.png"}],
              other: ["Responsvie design", "Semantic HTML", "Google Maps API"]
            }}
          />
          <WebsiteExample 
            open={false}
            id={"responsive"}
            title={"Responsive design"}
            assetDir={"responsive"}
            href={"https://andriussvilys.github.io/responsive-eg1/"}
            imageList={
              ["responsive-eg-1.jpg",
                "responsive-eg-2.jpg",
              ]
            }
            badges={{
              badges: [{title: "HTML5", img: "HTML5.png"}, {title: null, img: "sass.svg"},],
              other: ["Responsive design", "Semantic HTML"]
            }}
          />
          <WebsiteExample 
            open={false}
            id={"t-pose"}
            title={"T-Pose"}
            assetDir={"t-pose"}
            href={"https://andriussvilys.github.io/t-pose/"}
            imageList={
              ["t-pose-desktop-1.png",
                "t-pose-desktop-2.png",
                "t-pose-mob.png"
              ]
            }
            badges={{
              badges: [{title: "React", img: "react.svg"}, {title: null, img: "sass.svg"}],
              other: []
            }}
          />
        </section>

        <section id="tools" >
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
        <section id="about">
          <h1 className="headline">
            ABOUT:
          </h1>
          <div className="about-wrapper">
            <div className="about-image-wrapper">
              <img className="about-image" alt="portrait" />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
        </section>

        <div className="footer"></div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
