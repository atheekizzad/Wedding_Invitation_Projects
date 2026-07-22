import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaDirections,
  FaCalendarAlt,
} from "react-icons/fa";

import "./css/Location.css";

function Location() {
  return (
    <section className="location-section" id="location">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Waleema Reception Venue
      </motion.h2>

      <motion.p
        className="location-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        With the blessings of Allah, we warmly invite you to join us for the
        Waleema celebration. Your presence will make this occasion truly
        memorable
      </motion.p>

      <div className="location-container">
        {/* Venue Card */}

        <motion.div
          className="location-card"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          whileHover={{
            y: -8,
          }}
        >
          <div className="info-item">
            <FaMapMarkerAlt />

            <div>
              <h5>Venue</h5>

              <p>Diyakata Pahana Resort</p>

              <small>
                Medawachiya Junction , Anuradhapura Road , Horowpothana
              </small>
            </div>
          </div>

          <div className="info-item">
            <FaCalendarAlt />

            <div>
              <h5>Date</h5>

              <p>
                Sunday , 9<sup>th</sup> August 2026
              </p>
            </div>
          </div>

          <div className="info-item">
            <FaClock />

            <div>
              <h5>Reception</h5>

              <p>11:30 AM onwards</p>
            </div>
          </div>
          <div className="direction-btn">
            <a
              href="https://maps.app.goo.gl/ogUGEsJTLPa7ECjG9"
              target="_blank"
              rel="noreferrer"
            >
              <FaDirections />
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Google Map */}

        <motion.div
          className="map-container"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <iframe
            title="Diyakata Pahana Resort Wedding Venue"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.559380043218!2d80.82202557477466!3d8.542084491501141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb8775750db14d%3A0x377b8e45c9e7b931!2sDiyakata%20Pahana%20Resort!5e0!3m2!1sen!2slk!4v1783591081689!5m2!1sen!2slk"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Location;
