import { motion } from "framer-motion";
import "./css/Verse.css";

function Verse() {
  return (
    <section className="verse-section">
      <motion.div
        className="verse-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="verse-line"></div>

        <p className="verse-arabic">
          بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي
          خَيْرٍ
        </p>

        <p className="verse-translation">
          May Allah bless you, and shower His blessings upon you, and unite you
          both in goodness
        </p>

        <div className="verse-line"></div>
      </motion.div>
    </section>
  );
}

export default Verse;
