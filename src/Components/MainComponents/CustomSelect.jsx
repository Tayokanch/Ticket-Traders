import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./CustomSelect.css";
import cities from "../../data.js";

function CustomSelect(props) {
  const { countries, setCountries } = props;
  const [selectedITtem, setSelectedItem] = useState(null);
  const [isActive, setIsActive] = useState(false);

  console.log(countries);

  const INITIAL_SEARCH = {
    city: "",
  };
  const [search, setSearch] = useState(INITIAL_SEARCH);

  const hanldeSearch = (event) => {
    const { name, value } = event.target;
    setSearch((prevSearch) => ({ ...prevSearch, [name]: value }));

    if (value === "") {
      setCountries(cities);
      setSelectedItem(null);
    } else {
      const filterSearch = countries.filter((country) =>
        country.city.toLowerCase().startsWith(value.toLowerCase())
      );
      setCountries(filterSearch);
    }
  };

  const handleListItemClick = (selectedCity) => {
    setSearch({ city: selectedCity });
    setCountries(cities);
    setSelectedItem(selectedCity);
  };

  const toggleActiveClass = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div
      className={`wrapper ${isActive ? "active" : ""}`}
    >
      <div className={`select-btn`} onClick={toggleActiveClass}>
        <span>Select Country</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="content">
        <div className="search">
          <div className="search-icon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="magnify-icon"
            />
            <input
              type="text"
              placeholder="search"
              name="city"
              value={search.city}
              className="input"
              onChange={(event) => hanldeSearch(event)}
            />
          </div>
          <ul className={`options ${selectedITtem ? "active" : ""}`}>
            {countries.map((country, index) => (
              <li key={index} onClick={() => handleListItemClick(country.city)}>
                {country.city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomSelect;
