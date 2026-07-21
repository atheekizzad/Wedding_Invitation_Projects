import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);

  const openInvitation = () => {
    setClosing(true);

    setTimeout(() => {
      setOpened(true);
    }, 1200);
  };

  return (
    <AnimatePresence mode="wait">
      {opened ? (
        <motion.div
          key="hero"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Hero />
        </motion.div>
      ) : (
        <motion.div
          key="landing"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <LandingPage onOpen={openInvitation} closing={closing} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
