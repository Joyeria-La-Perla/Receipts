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

  // todo refactor the form data logic? for cleaner code

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

  function handleTax(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      taxes: value,
    }));

    console.log(value);
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

      {/* todo handle data
      <div>
        {["cash", "card", "weekly", "monthly", "will-call", "mail"].map(
          (name) => (
            <div key={name}>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </label>
            </div>
          ),
        )}
      </div>
      */}

      <div>
        <label htmlFor="default_tax">0%</label>
        <input
          type="radio"
          name="taxes"
          id="default_tax"
          value="0"
          checked={formData.taxes === "0"}
          onChange={handleTax}
        />
      </div>

      <div>
        <label htmlFor="local_tax">8.9%</label>
        <input
          type="radio"
          name="taxes"
          id="local_tax"
          value="8.9"
          checked={formData.taxes === "8.9"}
          onChange={handleTax}
        />
      </div>

      {/*todo purchase or deposit logic*/}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
