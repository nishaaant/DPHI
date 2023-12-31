import React from "react";
import SearchIcon from "../assets/icons/Searchbar.svg";
import ArrowIcon from "../assets/icons/arrowDown.svg";
import Cross from "../assets/icons/Cross.svg";
import { useRef, useState } from "react";
const SearchSection = ({ filter, setFilter, setSearchData }) => {
  const first = useRef();
  const Second = useRef();
  const [isdisplay, setIsdisplay] = useState(false);
  const ToggleHandler = (e) => {
    if (isdisplay) {
      first.current.style.display = "none";
      Second.current.style.display = "none";
      setIsdisplay(false);
    } else {
      first.current.style.display = "block";
      Second.current.style.display = "block";
      setIsdisplay(true);
    }
  };
  const addFilterHandler = (e) => {
    if (e.target.checked) {
      setFilter([
        ...filter,
        {
          FilterName: `${e.target.className}`,
          Filter: `${e.target.id}`,
          FilterId: `${Math.random()}`,
        },
      ]);
    } else if (!e.target.checked) {
      RemovefltHandler(e.target.id);
    }
  };
  const RemovefltHandler = (e) => {
    let array = filter;
    array = array.filter((tg) => {
      return tg.Filter !== e;
    });
    setFilter(array);
  };
  const SearchItemHandler = (e) => {
    setSearchData(e.target.value);
  };
  return (
    <div className="SearchBox">
      <div
        className="blackout"
        ref={Second}
        onClick={() => {
          ToggleHandler();
        }}
      ></div>
      <h3>Explore Challenges</h3>
      <div className="flexbox">
        <div className="SrhBx">
          <img src={SearchIcon} alt="" className="Srhicon" />
          <input
            type="text"
            id="SearchBar"
            placeholder="Search"
            onChange={(e) => {
              SearchItemHandler(e);
            }}
          />
          <div className="DropDown">
            <div
              className="flt"
              onClick={() => {
                ToggleHandler();
              }}
            >
              <p> Filter</p> <img src={ArrowIcon} alt="" />
            </div>
            <div className="ToggleDisplay" ref={first}>
              <ul>
                <span>Status</span>
                <li>
                  <input
                    type="checkbox"
                    className="Everything"
                    name="All"
                    id="All"
                    onClick={(e) => {
                      addFilterHandler(e);
                    }}
                  />
                  <p>All</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="Status"
                    name="Active"
                    id="Active"
                    onClick={(e) => {
                      addFilterHandler(e);
                    }}
                  />
                  <p>Active</p>{" "}
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="Status"
                    name="upcoming"
                    id="Upcoming"
                    onClick={(e) => {
                      addFilterHandler(e);
                    }}
                  />
                  <p>Upcoming</p>{" "}
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="Status"
                    name="Past"
                    id="Past"
                    onClick={(e) => {
                      addFilterHandler(e);
                    }}
                  />
                  <p>Past</p>{" "}
                </li>
              </ul>

              <ul>
                <span>Level</span>
                <li>
                  <input
                    type="checkbox"
                    className="Level"
                    name="Easy"
                    id="Easy"
                    onClick={(e) => {
                      addFilterHandler(e);
                    }}
                  />
                  <p>Easy</p>{" "}
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="Level"
                    name="Medium"
                    id="Medium"
                    onClick={(e) => {
                      addFilterHandler(e);
                    }}
                  />
                  <p>Medium</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="Level"
                    name="Hard"
                    id="Hard"
                    onClick={(e) => {
                      addFilterHandler(e);
                    }}
                  />
                  <p>Hard</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tags">
        <div>
          {filter &&
            filter.map((tags) => (
              <span key={filter.FilterId + 1}>
                {tags.Filter}
                <img
                  src={Cross}
                  alt="X"
                  onClick={() => {
                    RemovefltHandler(tags.Filter);
                  }}
                />
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
