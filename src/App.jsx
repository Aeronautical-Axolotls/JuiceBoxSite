import Logo from './assets/juicebox_logo_256.png'
import teamphoto from './assets/aeronauticalaxolotls.png'
import './App.css'

function App() {
  

  return (
    <>
      <div>
          <img src={Logo} className="logo" alt="logo" />
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lozy-ujKxfY?si=5AsH__Yk0pKV8KDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h1>What is JuiceBox?</h1>
      <p>
      Introducing JuiceBox, your gateway to the fascinating world of fluid dynamics. Tired of the complexity and clutter of traditional fluid simulators? We were too. JuiceBox simplifies the experience, removing unnecessary buttons and creating an intuitive, interactive platform that's as beautiful as it is educational. 

      Designed with classrooms in mind, JuiceBox offers a simplistic 2D fluid simulator that gets students excited about physics. It's not just about watching liquids flow – it's about visualizing the math behind fluid dynamics, making complex concepts come to life. 

      But that's not all! JuiceBox runs in real-time, ensuring more engaging interactions between users and the fluid, turning learning into a captivating experience.  

      JuiceBox: Making fluid dynamics more accessible, more engaging, and simply more fun
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FjDomKZk2Ns?si=rNPX9OBgmS5oWVC9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h1>How can I get JuiceBox? Can I fork it?</h1>
      <a href="https://github.com/Aeronautical-Axolotls/JuiceBox">It has a public GitHub repo!</a>
      <h1>Who made JuiceBox?</h1>
      <div>
        <img src={teamphoto} style={{width:'480px'}}/>
        <div>
        <a href='https://r3dc0g.github.io'>Garrett Crites</a>
        </div>
        <div>
        <a href='https://dillon-goicoechea.github.io'>Dillon Goicoechea</a>
        </div>
        <div>
        <a href='matthewfisk.com'>Matthew Fisk</a>
        </div>
        <div>
        <a href='http://kadesamson.com'>Kade Samson</a>
        </div>
      </div>
    </>
  )
}

export default App
