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
    typeOfPurchase: "purchase",
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

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  }

  function handleTax(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      taxes: value,
    }));
  }

  function handlePurchaseType(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      typeOfPurchase: value,
      payment: value === "purchase" ? prevData.payment : "",
      deposit: value === "lay_away" ? prevData.deposit : "",
    }));
  }

  function handlePayment(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      payment: value,
    }));
  }

  function handleDeposit(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      deposit: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleName}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          autoComplete="off"
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
        <input
          type="text"
          name="phone"
          id="phone"
          onChange={handlePhone}
          autoComplete="off"
        />
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

      <div>
        {["cash", "card", "weekly", "monthly", "will-call", "mail"].map(
          (name) => (
            <div key={name}>
              <input
                type="checkbox"
                id={name}
                name={name}
                onChange={handleCheckbox}
              />
              <label htmlFor={name}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </label>
            </div>
          ),
        )}
      </div>

      <div>
        <input
          type="radio"
          name="taxes"
          id="default_tax"
          value="0"
          checked={formData.taxes === "0"}
          onChange={handleTax}
        />
        <label htmlFor="default_tax">0%</label>
      </div>

      <div>
        <input
          type="radio"
          name="taxes"
          id="local_tax"
          value="8.9"
          checked={formData.taxes === "8.9"}
          onChange={handleTax}
        />
        <label htmlFor="local_tax">8.9%</label>
      </div>

      <div>
        <input
          type="radio"
          name="typeOfPurchase"
          id="purchase"
          value="purchase"
          checked={formData.typeOfPurchase === "purchase"}
          onChange={handlePurchaseType}
        />
        <label htmlFor="purchase">Purchase</label>
      </div>

      <div>
        <input
          type="radio"
          name="typeOfPurchase"
          id="lay_away"
          value="lay_away"
          checked={formData.typeOfPurchase === "lay_away"}
          onChange={handlePurchaseType}
        />
        <label htmlFor="lay_away">Lay away</label>
      </div>

      <hr />

      {formData.typeOfPurchase === "purchase" ? (
        <div>
          <label htmlFor="payment">Payment</label>
          <input
            type="text"
            name="payment"
            id="payment"
            value={formData.payment}
            onChange={handlePayment}
          />
        </div>
      ) : (
        <div>
          <label htmlFor="deposit">Deposit</label>
          <input
            type="text"
            name="deposit"
            id="deposit"
            value={formData.deposit}
            onChange={handleDeposit}
          />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
