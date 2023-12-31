import Home from "./Pages/Home";
import Challanges from "./Pages/Challanges";
import EditChallanges from "./Pages/EditChallanges";
import Header from "./Components/Header";
import { data } from "./Data";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateChallenge from "./Pages/CreateChallenge";
function App() {
  const [Challenge, setChallenge] = useState(data);
  const [Deleted, setDeleted] = useState([]);
  const [Editchllg, setEditchllg] = useState();
  const [newChallenge, setnewChallenge] = useState();
  const AddChllgHandler = () => {
    if (newChallenge) {
      setChallenge(newChallenge);
    }
  };
  const DeletechllgHandler = () => {
    if (Deleted[0]) {
      const myPromise = new Promise((resolve, reject) => {
        let array = Challenge;
        Deleted.forEach((element) => {
          array = array.filter((e) => {
            return e.id !== element[0].id;
          });
        });
        resolve(array);
      });
      myPromise.then((value) => {
        setChallenge(value);
        setEditchllg(value);
      });
    }
  };
  const addEditHandler = () => {
    if (Editchllg) {
      setChallenge(Editchllg);
    }
  };
  useEffect(() => {
    addEditHandler();
  }, [Editchllg]);
  useEffect(() => {
    DeletechllgHandler();
  }, [Deleted]);
  useEffect(() => {
    AddChllgHandler();
  }, [newChallenge]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                Deleted={Deleted}
                Editchllg={Editchllg}
                newChallenge={newChallenge}
              />
            }
          />
          <Route
            path="/challanges/:id"
            element={
              <Challanges
                data={Challenge}
                setDeleted={setDeleted}
                Deleted={Deleted}
              />
            }
          />
          <Route
            path="/createchallange"
            element={
              <CreateChallenge
                data={Challenge}
                setnewChallenge={setnewChallenge}
                Editchllg={Editchllg}
                setEditchllg={setEditchllg}
              />
            }
          />
          <Route
            path="/editschallanges/:id"
            element={<EditChallanges data={Challenge} setData={setEditchllg} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
