import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FeedBackModal from "../FeedBackModal/FeedBackModal";
import { useNavigate } from "react-router-dom";

const NavBar = ({ data, logo = false, search = false, feedback = false }) => {
  const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);
  const navigate = useNavigate();
  const toggleFeedBackModal = (value = false) => {
    setIsFeedBackModalOpen(value);
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
          {logo ? <Logo id={styles.logo} /> : null}
        </div>
        {search ? (
          <div className={styles.searchWrapper}>
            <SearchBar placeholder="search a song" data={data} />
          </div>
        ) : null}
        {feedback ? (
          <button
            className={styles.nav_link}
            onClick={() => toggleFeedBackModal(true)}
          >
            Give Feedback
          </button>
        ) : null}
      </nav>
      <FeedBackModal
        isOpen={isFeedBackModalOpen}
        onDismiss={toggleFeedBackModal}
      />
    </div>
  );
};

export default NavBar;