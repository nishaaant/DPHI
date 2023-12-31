import ChallengeCard from "./ChallengeCard";
import { useState, useEffect } from "react";
export const ChallengesSection = ({
  filter,
  SearchData,
  data,
  Deleted,
  Editchllg,
  newChallenge,
}) => {
  const [ChalleneData, setChalleneData] = useState(data);
  const AddNewChallengeHandler = async () => {
    if (newChallenge) {
      setChalleneData(await newChallenge);
    }
  };
  const EditChallangesHandler = async () => {
    if (Deleted[0]) {
      if (Editchllg) {
        const MyPromise = new Promise((resolve, reject) => {
          let array = Editchllg;
          Deleted.forEach((element) => {
            array = array.filter((e) => {
              return e.id !== element[0].id;
            });
            resolve(array);
          });
        });
        MyPromise.then((value) => setChalleneData(value));
      }
    } else {
      if (Editchllg) {
        setChalleneData(await Editchllg);
      }
    }
  };
  const DeleteHandler = async () => {
    if (Deleted[0]) {
      if (Editchllg) {
        const MyPromise = new Promise((resolve, reject) => {
          let array = Editchllg;
          Deleted.forEach((element) => {
            array = array.filter((e) => {
              return e.id !== element[0].id;
            });
            resolve(array);
          });
        });
        MyPromise.then((value) => {
          setChalleneData(value);
        });
      } else {
        const MyPromise = new Promise((resolve, reject) => {
          let array = ChalleneData;
          Deleted.forEach((element) => {
            array = array.filter((e) => {
              return e.id !== element[0].id;
            });
            resolve(array);
          });
        });
        MyPromise.then((value) => {
          setChalleneData(value);
        });
      }
    }
  };
  const CheckStatus = (data) => {
    const CurrentDate = new Date();
    if (data.StartIn.Month == CurrentDate.getMonth() + 1) {
      if (data.StartIn.Day > CurrentDate.getDate()) {
        return "Upcoming";
      } else if (data.StartIn.Day < CurrentDate.getDate()) {
        if (data.EndIn.Day == CurrentDate.getDate()) {
          return "Active";
        } else if (data.EndIn.Day > CurrentDate.getDate()) {
          return "Active";
        } else if (data.EndIn.Day < CurrentDate.getDate()) {
          return "Past";
        }
      }
    } else if (data.StartIn.Month > CurrentDate.getMonth() + 1) {
      return "Upcoming";
    } else if (data.StartIn.Month < CurrentDate.getMonth() + 1) {
      return "Past";
    }
  };
  const applyFilterHandler = async () => {
    if (Editchllg) {
      let array = Editchllg;
      if (filter[0]) {
        let array3 = [];
        await filter.forEach((element) => {
          let array2;
          if (element.FilterName === "Everything") {
            array3 = Editchllg;
          } else if (element.FilterName === "Level") {
            array2 = array.filter((x) => {
              return x.Tag == element.Filter;
            });
            array3 = array2.concat(...array3);
          } else if (element.FilterName === "Status") {
            array2 = array.filter((x) => {
              const tag = CheckStatus(x);
              return tag == element.Filter;
            });
            array3 = array2.concat(...array3);
          }
        });
        let uniqueChars = array3.filter((c, index) => {
          return array3.indexOf(c) === index;
        });
        setChalleneData(uniqueChars);
      } else {
        setChalleneData(Editchllg);
      }
    } else {
      let array = data;
      if (filter[0]) {
        let array3 = [];
        await filter.forEach((element) => {
          let array2;
          if (element.FilterName === "Everything") {
            array3 = data;
          } else if (element.FilterName === "Level") {
            array2 = array.filter((x) => {
              return x.Tag == element.Filter;
            });
            array3 = array2.concat(...array3);
          } else if (element.FilterName === "Status") {
            array2 = array.filter((x) => {
              const tag = CheckStatus(x);
              return tag == element.Filter;
            });
            array3 = array2.concat(...array3);
          }
        });
        let uniqueChars = array3.filter((c, index) => {
          return array3.indexOf(c) === index;
        });
        setChalleneData(uniqueChars);
      } else {
        setChalleneData(data);
      }
    }
  };
  const searchHandler = () => {
    if (Editchllg) {
      let array;
      const Item = SearchData;
      if (Item != undefined) {
        if (Item === "") {
          setChalleneData(Editchllg);
        } else {
          array = Editchllg.filter((element) => {
            const itemLength = Item.length;
            const item = element.Title.toUpperCase().slice(0, itemLength);
            return item == Item.toUpperCase();
          });
          setChalleneData(array);
        }
      } else {
        setChalleneData(Editchllg);
      }
    } else {
      let array;
      const Item = SearchData;
      if (Item != undefined) {
        if (Item === "") {
          setChalleneData(data);
        } else {
          array = data.filter((element) => {
            const itemLength = Item.length;
            const item = element.Title.toUpperCase().slice(0, itemLength);
            return item == Item.toUpperCase();
          });
          setChalleneData(array);
        }
      } else {
        setChalleneData(data);
      }
    }
  };
  useEffect(() => {
    AddNewChallengeHandler();
  }, [newChallenge]);

  useEffect(() => {
    EditChallangesHandler();
  }, [Editchllg]);
  useEffect(() => {
    applyFilterHandler();
  }, [filter, data]);
  useEffect(() => {
    searchHandler();
  }, [SearchData]);
  useEffect(() => {
    DeleteHandler();
  }, [Deleted]);
  return (
    <div className="Challengesstn">
      {ChalleneData.map((chllg) => {
        return <ChallengeCard data={chllg} key={chllg.id} />;
      })}
      <h4 className="Warning">{ChalleneData[0] ? "" : "No Match Found"}</h4>
    </div>
  );
};
