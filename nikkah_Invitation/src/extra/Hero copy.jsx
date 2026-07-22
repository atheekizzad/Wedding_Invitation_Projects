import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./css/Hero.css";
import { lazy, Suspense } from "react";

const Countdown = lazy(() => import("../components/Countdown"));
const Location = lazy(() => import("../components/Location"));
const Verse = lazy(() => import("../components/Verse"));
const Download = lazy(() => import("../components/Download"));

function Hero() {
  return (
    <div className="cover-all">
      <section className="hero">
        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          {/* Arabic Bismillah */}
          <motion.div
            className="arabic-bismi"
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.div>

          <motion.p
            className="arab-text"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            In the name of ALLAH, the Most Merciful and the Most Beneficient
          </motion.p>
          <motion.p
            className="invite-text"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            You Are Cordially Invited
          </motion.p>

          <motion.h3
            className="host-title"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
            }}
          >
            AL-Haj Mr. & Mrs. A. M. A. Atheek
          </motion.h3>
          <motion.p
            className="host-text"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
            }}
          >
            Request the pleasure of your gracious presence At Lunch on the
            occasion of the
          </motion.p>
          {/*Title*/}
          <motion.h3
            className="event-title"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
            }}
          >
            Waleema Ceremony
          </motion.h3>

          {/* Couple */}
          <div className="couple">
            <motion.h2
              initial={{
                opacity: 0,
                x: -120,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              Mohamed Izzad
              <br />
              <span>
                Beloved son of
                <br />
                Mr. & Mrs. A. M. A. Atheek
              </span>
            </motion.h2>

            <motion.div
              className="heart-box"
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
            >
              <FaHeart className="heart" />
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                x: 120,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              Siththi Riskana
              <span>
                Beloved Daughter of
                <br />
                Late Mr. & Mrs. A.Kaffoor
              </span>
            </motion.h2>
          </div>
          <motion.h3
            className="save-date-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Save The Date
          </motion.h3>
          <div className="details">
            <motion.div
              className="detail-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaClock />

              <div>
                <p>11 : 30 AM</p>
              </div>
            </motion.div>
            <motion.div
              className="detail-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaCalendarAlt />

              <div>
                <p>
                  Sunday
                  <br />9<sup>th</sup> August 2026
                </p>
              </div>
            </motion.div>

            <motion.div
              className="detail-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt />

              <div>
                <p>
                  Diyakata Pahana Resort
                  <br />
                  Horowpothana
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Suspense fallback={<h1 style={{ color: "white" }}>....loading</h1>}>
        <Countdown />
        <Verse />
        <Location />
        <Download />
      </Suspense>
    </div>
  );
}

export default Hero;
