import React from 'react';
import Triangle from './components/triangle';
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

              <button className="CTA-contact">get in touch</button>
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
            id={"personal-website"}
            title={"Personal website"}
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
              badges: [{title: "React JS", img: "react.svg"}, {title: "Sass", img: "sass.svg"}],
              other: ["React-slick", "filters"]
            }}
          />
          <WebsiteExample 
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
              badges: [{title: "React JS", img: "react.svg"}, {title: "Redux", img: "redux.svg"}, {title: "Sass", img: "sass.svg"}],
              other: ["unsplash-API"]
            }}
          />
        </section>

        <section id="tools"></section>
        <section id="about"></section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
