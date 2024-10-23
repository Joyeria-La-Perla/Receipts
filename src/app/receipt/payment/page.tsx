"use client";

import React, { useState } from "react";

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getFutureDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T10:00`;
}

console.log(getFutureDate());

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "1608 W Sylvester St Unit C",
    city: "Pasco",
    phone: "",
    dateReceived: getCurrentDate(),
    datePromised: getFutureDate(),
    remarks: "",
    cash: false,
    card: false,
    weekly: false,
    monthly: false,
    willCall: false,
    mail: false,
    taxes: "0",
    typeOfPurchase: "",
    payment: "",
    deposit: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(formData);
  }

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      name: value,
    }));
  }

  function handleReceived(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      dateReceived: value,
    }));
  }

  function handlePromised(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      datePromised: value,
    }));
  }

  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  }

  function handleRemarks(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      remarks: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleName} />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          readOnly
          disabled
        />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          readOnly
          disabled
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" onChange={handlePhone} />
      </div>

      <div>
        <div>
          <label htmlFor="received">Date Received</label>
          <input
            type="date"
            name="received"
            id="received"
            value={formData.dateReceived}
            onChange={handleReceived}
          />
        </div>

        <div>
          <label htmlFor="promised">Date Promised</label>
          <input
            type="datetime-local"
            name="promised"
            id="promised"
            value={formData.datePromised}
            onChange={handlePromised}
          />
        </div>
      </div>

      <div>
        <label htmlFor="remarks">Remarks</label>
        <textarea
          name="remarks"
          id="remarks"
          cols={30}
          rows={10}
          onChange={handleRemarks}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
