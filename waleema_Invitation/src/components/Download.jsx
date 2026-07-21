import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import invitationImage from "../assets/background.jpg";
import "./css/Download.css";
import { FaCheckCircle, FaDownload, FaSpinner } from "react-icons/fa";

function Download() {
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const downloadImage = () => {
    setLoading(true);

    const link = document.createElement("a");

    link.href = invitationImage;
    link.download = "Wedding-Invitation.png";

    setTimeout(() => {
      link.click();

      setLoading(false);
      setDownloaded(true);

      setTimeout(() => {
        setDownloaded(false);
      }, 3000);
    }, 1200);
  };

  return (
    <section className="download-section">
      <motion.button
        className="download-btn"
        onClick={downloadImage}
        disabled={loading || downloaded}
        initial={{
          opacity: 0,
          y: 3,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <motion.span
          key={loading ? "loading" : downloaded ? "done" : "download"}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {loading ? (
            <span className="loading-content">
              <span className="spinner"></span>
              Downloading...
            </span>
          ) : (
            "Download"
          )}
        </motion.span>
      </motion.button>
      <AnimatePresence mode="wait">
        <motion.p
          className="download-description"
          key={loading ? "loading" : downloaded ? "success" : "default"}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -15,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          {loading ? (
            <>
              <FaSpinner className="loading-icon" />
              Preparing Your E-Invitation...
            </>
          ) : downloaded ? (
            <>
              <FaCheckCircle className="success-icon" />
              Your E-Invitation Has Been Successfully Downloaded
            </>
          ) : (
            <>
              <FaDownload className="download-icon" />
              Click to Download Your E-Invitation
            </>
          )}
        </motion.p>
      </AnimatePresence>
    </section>
  );
}

export default Download;
