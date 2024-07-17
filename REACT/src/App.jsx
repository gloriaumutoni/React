import { useState } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function Header() {
  return (
      <header>
          <nav>
              <img src="./react-logo.png" width="40px" />
          </nav>
      </header>
  )
}

function Page() {
  return (
      <div>
          <Header />
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
          <footer>
              <small>© 2021 Ziroll development. All rights reserved.</small>
          </footer>
      </div>
  )
}

function App() {
  return (
    <>
    <Page/>
      <h1>Fun facts about React</h1>
      <img src="/assets/clouds.jpg" alt="" width={"200px"} height={"200px"}/>
      <ul>
        <li>was first released in 2013</li>
        <li>was originaly created by Jordan walke</li>
        <li>Has well over 100k stars on Github</li>
      </ul>
    </>
  );
}

export default App;
