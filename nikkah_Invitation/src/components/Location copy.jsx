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
        Nikkah Reception Venue
      </motion.h2>

      <motion.p
        className="location-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        With the blessings of Allah, we warmly invite you to join us for the
        Nikkah Ceremony. Your presence will make this occasion truly memorable.
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

              <p> Bride's Residence</p>

              <small>No 7, Vavuniya Road , Kivlekada , Horowpothana</small>
            </div>
          </div>

          <div className="info-item">
            <FaCalendarAlt />

            <div>
              <h5>Date</h5>

              <p>
                Saturday , 8<sup>th</sup> August 2026
              </p>
            </div>
          </div>

          <div className="info-item">
            <FaClock />

            <div>
              <h5>Reception</h5>

              <p>12:00 PM onwards</p>
            </div>
          </div>
          <div className="direction-btn">
            <a
              href="https://maps.app.goo.gl/4bcvApZkMRjvWP5p7"
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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d10972.6955475233626!2d80.82047253856382!3d8.558338997871381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMzMnMzAuMCJOIDgwwrA0OScxOC4zIkU!5e0!3m2!1sen!2slk!4v1784733481208!5m2!1sen!2slk"
            allowfullscreen=""
            loading="lazy"
            allowFullScreen
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default Location;
