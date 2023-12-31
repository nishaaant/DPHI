import React, { useState, useEffect } from "react";
import Icon from "../assets/icons/clock.svg";
import Icon2 from "../assets/icons/carbon_skill-level-basic.svg";
import {
  useParams,
  useSearchParams,
  useNavigate,
  Link,
} from "react-router-dom";
const Challanges = ({ data, setDeleted, Deleted }) => {
  let navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [cllg, setcllg] = useState(
    data.filter((element) => {
      return element.id == params.id;
    })
  );
  const [am, setAm] = useState("AM");
  const [FormatTime, setFormatTime] = useState(cllg[0].StartIn.Time);
  const [status, setstatus] = useState(searchParams.get("status"));
  const DeleteCllgHandler = async () => {
    setDeleted([...Deleted, cllg]);
    navigate(`/`);
  };

  useEffect(() => {
    if (status == "Upcoming") {
      if (cllg[0].StartIn.Time > 12) {
        setAm("PM");
        setFormatTime(cllg[0].StartIn.Time - 12);
      }
    } else {
      if (cllg[0].EndIn.Time > 12) {
        setAm("PM");
        setFormatTime(cllg[0].EndIn.Time - 12);
      }
    }
  }, []);

  var mL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      <div className="ChllgHero">
        <div className="chllgtimer">
          <img src={Icon} alt="Icon" />
          {status === "Upcoming"
            ? `Start on ${cllg[0].StartIn.Day}th ${mL[cllg[0].StartIn.Month]}'${
                cllg[0].StartIn.Year
              } ${FormatTime}:00${am} (India Standard Time)`
            : ""}
          {status === "Active"
            ? `End on ${cllg[0].EndIn.Day}th ${mL[cllg[0].EndIn.Month]}'${
                cllg[0].EndIn.Year
              } ${FormatTime}:00${am} (India Standard Time)`
            : ""}
          {status === "Past"
            ? `Ended on ${cllg[0].EndIn.Day}th ${mL[cllg[0].EndIn.Month]}'${
                cllg[0].EndIn.Year
              } ${FormatTime}:00${am} (India Standard Time)`
            : ""}
        </div>
        <h1>{cllg[0].Title}</h1>
        <h3>{cllg[0].descpibtin}</h3>
        <button>
          <img src={Icon2} alt="Icon" />
          {cllg[0].Tag}
        </button>
      </div>
      <div className="flexboxs">
        <div className="overView">
          Overview <div className="line"></div>
        </div>
        <div className="chllgbttns">
          <Link to={`/editschallanges/${cllg[0].id}`} className="linksclass">
            <button className="Editbttn">Edit</button>
          </Link>
          <button
            className="Dltbttn"
            onClick={() => {
              DeleteCllgHandler();
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="Over">{cllg[0].overview[0]}</div>
      <div className="Over">{cllg[0].overview[1]}</div>
      <div className="Over">{cllg[0].overview[2]}</div>
    </div>
  );
};

export default Challanges;
