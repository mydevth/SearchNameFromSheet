import "./style.css";
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
              placeholder="ใส่ชื่อที่ต้องการค้นหา...."
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </label>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <table className="showTable">
              <tbody>
                <tr>
                  <th className="row1">เลขที่</th>
                  <th>ชื่อ-นามสกุล</th>
                  <th>โรงเรียน</th>
                  <th>เวลาลงทะเบียน</th>
                </tr>

                {searchName(nameList).map((item, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td className="row1"> {item.number} </td>
                        <td className="row"> {item.name} </td>
                        <td className="row"> {item.school} </td>
                        <td className="row1"> {item.time} </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

function Loader() {
  return <p className="message">Loading......</p>;
}

export default App;
