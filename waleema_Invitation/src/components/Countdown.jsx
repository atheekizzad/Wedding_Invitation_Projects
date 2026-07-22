import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../components/css/Countdown.css";

function Countdown() {
  // Change this to your wedding date
  const weddingDate = new Date("August 9, 2026 11:30:00 AM").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown" id="countdown">
      <motion.h2
        className="section-titles"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Countdown To The Big Day
      </motion.h2>

      <motion.p
        className="countdown-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Every second brings closer
      </motion.p>

      <div className="countdown-container">
        <motion.div className="time-card" whileHover={{ scale: 1.05 }}>
          <h1>{timeLeft.days}</h1>
          <span>Days</span>
        </motion.div>

        <motion.div className="time-card" whileHover={{ scale: 1.05 }}>
          <h1>{timeLeft.hours}</h1>
          <span>Hours</span>
        </motion.div>

        <motion.div className="time-card" whileHover={{ scale: 1.05 }}>
          <h1>{timeLeft.minutes}</h1>
          <span>Minutes</span>
        </motion.div>

        <motion.div className="time-card" whileHover={{ scale: 1.05 }}>
          <h1>{timeLeft.seconds}</h1>
          <span>Seconds</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Countdown;
