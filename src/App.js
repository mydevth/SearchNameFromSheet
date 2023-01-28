import "./style.css";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
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
        setCountries(data);
      });
  }, []);

  const searchName = (countries) => {
    <p>ddd</p>;
    return countries.filter((item) => {
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
          <>
            <table className="showTable">
              <tbody>
                <tr>
                  <th className="row1">เลขที่</th>
                  <th>ชื่อ-นามสกุล</th>
                </tr>

                {searchName(countries).map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="row1"> {item.number} </td>
                      <td className="row"> {item.name} </td>
                    </tr>
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

// function NameList({ facts, setFacts }) {
//   if (facts.length === 0)
//     return (
//       <p className="message">
//         No facts for this category yet! Create the first one ✌
//       </p>
//     );

//   return (
//     <section>
//       <ul className="facts-list">
//         {facts.map((fact) => (
//           <Fact
//             key={fact.id}
//             fact={fact}
//             setFacts={setFacts}
//           /> /*  send fact  Props*/
//         ))}
//       </ul>
//       <p>There are {facts.length} facts in the database. Add your own!</p>
//     </section>
//   );
// }

function Loader() {
  return <p className="message">Loading......</p>;
}

export default App;
