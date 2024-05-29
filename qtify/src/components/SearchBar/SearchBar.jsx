// SearchBar.jsx

import React, { useEffect, useState, useCallback } from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import useComponentVisible from "../../components/hooks/useComponentVisible";
import MenuItems from "../MenuItems/MenuItems";

const SearchBar = ({ placeholder, data }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const _filterData = useCallback((data) => {
    if (!inputValue) {
      setFilteredOptions([]);
      return;
    }

    const filteredOptions = data?.filter((albumsData) =>
      albumsData?.title?.toLowerCase()?.includes(inputValue.toLowerCase())
    );

    setFilteredOptions(filteredOptions);
  }, [inputValue]);

  useEffect(() => {
    _filterData(data);
  }, [inputValue, data, _filterData]);

  return (
    <div>
      <div onClick={() => setIsComponentVisible(true)}>
        <form className={styles.wrapper}>
          <input
            className={styles.search}
            placeholder={placeholder} // Use the placeholder prop directly
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={styles.searchButton} type="submit">
            <SearchIcon className={styles.searchIcon} />
          </button>
        </form>
      </div>

      {isComponentVisible && (
        <div className={styles.dropdownWrapper} ref={ref}>
          {filteredOptions?.length ? (
            <MenuItems albums={filteredOptions} />
          ) : inputValue ? (
            <div className={styles.not_found_wrapper}>
              <p className={styles.not_found_message}>No Data Found</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;