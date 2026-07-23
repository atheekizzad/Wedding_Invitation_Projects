import "./css/LandingPage.css";
import { FaHeart } from "react-icons/fa";
import seal from "../assets/seal.webp";
function LandingPage({ onOpen, closing }) {
  return (
    <section className={`landing ${closing ? "open" : ""}`}>
      <div className="doors">
        {/* LEFT DOOR */}
        <div className="door left-door">
          <div className="left-content">
            <h1>Wedding Invitation</h1>

            <p className="ceremony">Nikkah Ceremony</p>

            <p className="date">
              Saturday , <span>8</span> August <span>2026</span>
            </p>
          </div>
        </div>

        {/* RIGHT DOOR */}
        <div className="door right-door">
          <div className="names">
            <h1>Izzad</h1>

            <div className="heart-boxs">
              <FaHeart className="hearts" />
            </div>

            <h1>Riskana</h1>
          </div>
        </div>

        {/* CENTER SEAL */}
        <div className="door-handle" onClick={onOpen}>
          <img src={seal} />
          <small>Tap to Open</small>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
