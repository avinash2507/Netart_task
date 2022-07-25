import "./App.css";
import "./header.css";
import { FooterNavigation } from "./Navigation";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook, FaGlobe } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headerimage">
          <img src="./images/logo.png" alt="" />
        </div>
      </header>
      <main className="app-content">
        <h3>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h3>
        <div className="maincontainer">
          <div className="awardimage-container">
            <img src="./images/1.png" alt="award show" />
          </div>
          <div className="main-content">
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
              <img src="./images/2.png" alt="" />
              <p>
                Government of India has awarded the{" "}
                <b>"National Energy Conservation Award 2018"</b>. Mr. G.
                Selvaraj, Joint Managing Director of C.R.I. Group received the
                award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                Raj Kumar Singh, Honorable Minister of State.
              </p>
            </ul>
          </div>
        </div>
      </main>
      <section className="second_screen">
        <h2>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h2>
        <div className="image2">
          <img src="./images/3.png" alt="" className="toolsthumbnails" />
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
      </section>
      <div className="lastHeading">
        <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
      </div>
      <div className="thirdpart">
        {FooterNavigation.map(({ id, text }) => (
          <a href="#" key={id}>
            {text}
          </a>
        ))}
      </div>
      <footer className="footer-content">
        <a href="#" >
          <FiPhoneCall />
          Toll free 18002001234
        </a>
        <a href="#">
          <FaFacebook />
          www.facebook.com/cripumps
        </a>
        <a href="#">
          <FaGlobe />
          www.crigroups.com
        </a>
      </footer>
    </div>
  );
}

export default App;
