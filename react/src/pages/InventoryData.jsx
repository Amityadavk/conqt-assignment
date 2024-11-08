import axios from "axios";
import React, { useState } from "react";

const InventoryData = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://apis-technical-test.conqt.com/Api/Item-Supplier/get-All-Items`,

        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response, "response");
      setInventoryData([...response?.data?.data?.items]);
    } catch (error) {
      console.log(error, "error");
    }
  };

  console.log(inventoryData, "inventory data");
  return (
    <>
      <div>
        <h1>Submitted Data</h1>
        <h3>The data submitted by users will be displayed below</h3>
        <button onClick={getData}>Save Changes</button>
      </div>
      <div>
        <table>
          <thead>
            <th>Supplier</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>City</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone Number</th>
          </thead>
          {inventoryData.map((item) => (
            <tbody>
              <td>{item.Supplier?.supplierName}</td>
              <td>{item?.itemName}</td>
              <td>{item?.quantity}</td>
              <td>{item.Supplier?.cityName}</td>
              <td>{item.Supplier?.countryName}</td>
              <td>{item.Supplier?.email}</td>
              <td>+{item.Supplier?.phoneNumber}</td>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default InventoryData;
