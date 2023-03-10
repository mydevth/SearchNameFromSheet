import "./style.css";
import DataTable from "./DataTable";
import Loader from "./Loader";
import { useState, useEffect } from "react";

function App() {
  const [nameList, setNameList] = useState([]);
  const [word, setWord] = useState("");
  const [dataFilter] = useState(["name"]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://opensheet.elk.sh/1Em4emsbmlczubf0NM-FTjb7vfhuucAk12wl8Y-WduzA/name"
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setNameList(data);
      });
  }, []);

  const searchName = (nameList) => {
    return nameList.filter((item) => {
      return dataFilter.some((filter) => {
        return item[filter].indexOf(word) > -1;
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="search-container">
          <label htmlFor="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="ใส่ชื่อที่ต้องการค้นหา"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </label>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <DataTable searchName={searchName} nameList={nameList} />
        )}
      </div>
    </>
  );
}

export default App;
