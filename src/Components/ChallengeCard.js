import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RightIcon from "../assets/icons/RightIcon.svg";
const ChallengeCard = ({ data }) => {
  const starttime = data.StartIn;
  const endtime = data.EndIn;
  const [isLeapYear, setIsLeapYear] = useState(false);
  const [remaining, setRemaining] = useState({
    RemainingDay: "loading",
    RemainingHours: "loading",
    RemainingMin: "loading",
  });
  const [Timer, setTimer] = useState();
  const [FormatTime, setFormatTime] = useState(endtime.Time);
  const [am, setAm] = useState("AM");
  const [status, setStatus] = useState("Loading");
  const [isPast, setIspast] = useState(false);
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const NoneleapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const getTimeHandler = () => {
    if (endtime.Time > 12) {
      setAm("PM");
      setFormatTime(endtime.Time - 12);
    }

    if (status == "Past") {
      setIspast(true);
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
      setTimer(
        `${endtime.Day}th ${mL[endtime.Month]}'${
          endtime.Year
        } ${FormatTime}:00${am}`
      );
    }
  };
  const setTimerHandler = () => {
    const year = parseInt(`20` + starttime.Year);
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
      setIsLeapYear(true);
    }
    if (status == "Upcoming") {
      const Today = new Date();
      let RemainingDay = starttime.Day - Today.getDate();
      if (starttime.Month > Today.getMonth() + 1) {
        if (isLeapYear === true) {
          RemainingDay =
            leapYear[Today.getMonth()] + starttime.Day - Today.getDate();
        } else {
          RemainingDay =
            NoneleapYear[Today.getMonth()] + starttime.Day - Today.getDate();
        }
      }
      const RemainingMin = Today.getMinutes();

      if (Today.getHours() > starttime.Time) {
        const RemainingHours = Today.getHours() - starttime.Time;
        setRemaining({
          RemainingDay: RemainingDay,
          RemainingHours: RemainingHours,
          RemainingMin: RemainingMin,
        });
      } else {
        const RemainingHours = starttime.Time - Today.getHours();
        setRemaining({
          RemainingDay: RemainingDay,
          RemainingHours: RemainingHours,
          RemainingMin: RemainingMin,
        });
      }
    } else if (status == "Active") {
      const Today = new Date();
      let RemainingDay = endtime.Day - Today.getDate();
      if (endtime.Month > Today.getMonth() + 1) {
        if (isLeapYear === true) {
          RemainingDay =
            leapYear[Today.getMonth()] + endtime.Day - Today.getDate();
        } else {
          RemainingDay =
            NoneleapYear[Today.getMonth()] + endtime.Day - Today.getDate();
        }
      }
      const RemainingMin = Today.getMinutes();

      if (Today.getHours() > endtime.Time) {
        const RemainingHours = Today.getHours() - endtime.Time;
        setRemaining({
          RemainingDay: RemainingDay,
          RemainingHours: RemainingHours,
          RemainingMin: RemainingMin,
        });
      } else {
        const RemainingHours = endtime.Time - Today.getHours();
        setRemaining({
          RemainingDay: RemainingDay,
          RemainingHours: RemainingHours,
          RemainingMin: RemainingMin,
        });
      }
    }
  };

  const CheckDateHendler = () => {
    const CurrentDate = new Date();

    if (data.StartIn.Month === CurrentDate.getMonth() + 1) {
      if (data.EndIn.Month === CurrentDate.getMonth() + 1) {
        if (data.StartIn.Day > CurrentDate.getDate()) {
          setStatus("Upcoming");
        } else if (data.StartIn.Day < CurrentDate.getDate()) {
          if (data.EndIn.Day == CurrentDate.getDate()) {
            setStatus("Active");
          } else if (data.EndIn.Day > CurrentDate.getDate()) {
            setStatus("Active");
          } else if (data.EndIn.Day < CurrentDate.getDate()) {
            setStatus("Past");
          }
        } else if (data.StartIn.Day == CurrentDate.getDate()) {
          if (data.StartIn.Time >= CurrentDate.getHours()) {
            setStatus("Upcoming");
          } else {
            setStatus("Active");
          }
        }
      }
      if (data.EndIn.Month > CurrentDate.getMonth() + 1) {
        setStatus("Active");
      }
    } else if (data.StartIn.Month > CurrentDate.getMonth() + 1) {
      setStatus("Upcoming");
    } else if (data.StartIn.Month < CurrentDate.getMonth() + 1) {
      setStatus("Past");
    }
  };

  useEffect(() => {
    getTimeHandler();
    setTimerHandler();
    CheckDateHendler();
  }, [status, data]);

  return (
    <div className="ChllgCard">
      <div>
        <img src={data.img} alt="ChallengeImage" style={{ width: "100%" }} />
      </div>
      {status === "Active" ? (
        <span className="Active">{status}</span>
      ) : (
        <span className="Inactive">{status}</span>
      )}
      <h5>{data.Title}</h5>
      {status === "Active" ? <span>Ends in</span> : ""}
      {status === "Upcoming" ? <span>Starts in</span> : ""}
      {status === "Past" ? <span>Ended on</span> : ""}
      <div className="Timerstn">
        {isPast ? (
          <h2 className="Timertime">{Timer}</h2>
        ) : (
          <div className="flexbox">
            <div>
              <h5>{remaining.RemainingDay}</h5>
              <h5>Days</h5>
            </div>
            <h2>:</h2>
            <div>
              <h5>{remaining.RemainingHours}</h5>
              <h5>Hours</h5>
            </div>
            <h2>:</h2>
            <div>
              <h5>{remaining.RemainingMin}</h5>
              <h5>Mins</h5>
            </div>
          </div>
        )}
      </div>
      <Link
        to={`/challanges/${data.id}?status=${status}`}
        className="linksclass"
      >
        <button className="ppt_ptn">
          <img src={RightIcon} alt="" /> Participate Now
        </button>
      </Link>
    </div>
  );
};

export default ChallengeCard;
