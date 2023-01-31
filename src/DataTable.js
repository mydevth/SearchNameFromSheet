import React from "react";

const DataTable = ({ searchName, nameList }) => {
  return (
    <>
      <table className="showTable">
        <tbody>
          <tr>
            <th className="row1">เลขที่</th>
            <th>ชื่อ-นามสกุล</th>
            <th>โรงเรียน</th>
            <th>เวลาลงทะเบียน</th>
          </tr>

          {searchName(nameList).map((item) => {
            return (
              <tr>
                <td className="row1"> {item.number} </td>
                <td className="row"> {item.name} </td>
                <td className="row"> {item.school} </td>
                <td className="row1"> {item.time} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
