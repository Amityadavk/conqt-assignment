import React, { useState } from "react";
import axios from "axios";
import InventoryData from "./InventoryData";

const Inventorymanagement = () => {
  const [itemChecked, setItemChecked] = useState(false);
  const [supplierChecked, setSupplierChecked] = useState(false);
  const [postData, setPostData] = useState({
    itemDetails: {
      itemName: "",
      quantity: "",
      unitPrice: "",
      currency: "$",
      submissionDate: "",
    },
    supplier: {
      supplierName: "",
      companyName: "conqt",
      email: "",
      phoneCode: "+91",
      phoneNumber: "",
      countryId: "",
      stateId: "",
      cityId: "",
    },
  });

  const postItemSupplier = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers`,
        postData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response, "response");
    } catch (error) {
      console.log(error, "error");
    }
  };

  

  console.log(postData, "postData");
  return (
    <div>
      <div>
        <input type="checkbox" onChange={() => setItemChecked(!itemChecked)} />
        <label htmlFor="">Item</label>
        <input
          type="checkbox"
          onChange={() => setSupplierChecked(!supplierChecked)}
        />
        <label htmlFor="">Supplier</label>
      </div>
      <div>
        <form action="" onSubmit={postItemSupplier}>
          {itemChecked && (
            <div>
              <h1>Item section</h1>
              <div className="inp-container">
                <label htmlFor="">item Name</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      itemDetails: {
                        ...postData.itemDetails,
                        itemName: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="inp-container">
                <label htmlFor="">Quantity</label>
                <input
                  type="number"
                  maxLength={10}
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      itemDetails: {
                        ...postData.itemDetails,
                        quantity: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="inp-container">
                <label htmlFor="">Unit Price</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      itemDetails: {
                        ...postData.itemDetails,
                        unitPrice: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="inp-container">
                <label htmlFor="">Date of Submission</label>
                <input
                  type="date"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      itemDetails: {
                        ...postData.itemDetails,
                        submissionDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          )}

          {supplierChecked && (
            <div>
              <h1>Supplier Section</h1>
              <div className="inp-container">
                <label htmlFor="">Supplier Name</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      supplier: {
                        ...postData.supplier,
                        supplierName: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="inp-container">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      supplier: {
                        ...postData.supplier,
                        countryId: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="inp-container">
                <label htmlFor="">State</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      supplier: {
                        ...postData.supplier,
                        stateId: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="inp-container">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      supplier: {
                        ...postData.supplier,
                        cityId: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="inp-container">
                <label htmlFor="">Email Address</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      supplier: {
                        ...postData.supplier,
                        email: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="inp-container">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      supplier: {
                        ...postData.supplier,
                        phoneNumber: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>

     <InventoryData/>
      
    </div>
  );
};

export default Inventorymanagement;
