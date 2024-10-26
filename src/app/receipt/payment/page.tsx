"use client";

import React, { useState } from "react";
import Form from "next/form";

interface FormData {
  name: string;
  address: string;
  city: string;
  phone: string;
  dateReceived: string;
  datePromised: string;
  remarks: string;
  cash: boolean;
  card: boolean;
  weekly: boolean;
  monthly: boolean;
  willCall: boolean;
  mail: boolean;
  cashPrice: number;
  cardPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  willCallPrice: number;
  mailPrice: number;
  totalPrice: number;
  taxes: string;
  typeOfPurchase: string;
  payment: string;
  deposit: string;

  [key: string]: string | number | boolean;
}

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
  const [formData, setFormData] = useState<FormData>({
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
    cashPrice: 0,
    cardPrice: 0,
    weeklyPrice: 0,
    monthlyPrice: 0,
    willCallPrice: 0,
    mailPrice: 0,
    totalPrice: 0,
    taxes: "0",
    typeOfPurchase: "purchase",
    payment: "",
    deposit: "",
  });

  const [tableData, setTableData] = useState<string[]>([]);

  function addItem(selectedItem: string) {
    setTableData((prevData) => [...prevData, selectedItem]);
  }

  function removeItem(selectedItem: string) {
    setTableData((prevData) =>
      prevData.filter((item) => item !== selectedItem),
    );
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { value, name } = e.target;

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: name.endsWith("Price") ? Number(value) : value,
      };

      if (name.endsWith("Price")) {
        updatedData.totalPrice =
          updatedData.cashPrice +
          updatedData.cardPrice +
          updatedData.mailPrice +
          updatedData.weeklyPrice +
          updatedData.monthlyPrice +
          updatedData.willCallPrice;
      }
      return updatedData;
    });

    console.log(value, name);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(formData);
  }

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: checked,
      };

      if (checked) {
        updatedData.totalPrice += Number(updatedData[name + "Price"]);
      } else {
        updatedData.totalPrice -= Number(updatedData[name + "Price"]);
      }

      return updatedData;
    });

    // todo add the logic for table
    console.log(name, checked);

    if (checked) {
      addItem(name);
    } else {
      removeItem(name);
    }
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

  return (
    // todo goal: make it look like physical receipt
    // todo add server action
    <Form
      action=""
      onSubmit={handleSubmit}
      className="small-receipt-form max-w-screen-sm mx-auto"
    >
      <h1 className="text-4xl font-black">
        No. <span className="text-sm font-normal">0001</span>
      </h1>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
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
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="flex justify-between">
        <div>
          <label htmlFor="received">Date Received</label>
          <input
            type="date"
            name="received"
            id="received"
            value={formData.dateReceived}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="promised">Date Promised</label>
          <input
            type="datetime-local"
            name="promised"
            id="promised"
            value={formData.datePromised}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="remarks">Remarks</label>
        <textarea
          name="remarks"
          id="remarks"
          cols={5000}
          rows={4}
          onChange={handleChange}
          className="border border-black resize-none max-h-28"
        ></textarea>
      </div>

      <div className="grid grid-cols-3">
        {["cash", "card", "weekly", "monthly", "willCall", "mail"].map(
          (name) => (
            <div key={name} className="small-receipt-form__checkbox-container">
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

      {/*todo add charges ._.*/}
      {/*todo tr will display when checking a checkbox above*/}
      {/*todo total will get the text input and add it together*/}
      <table className="small-receipt-form__table container">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data}>
              <th scope="row">
                {data.charAt(0).toUpperCase() + data.slice(1)}
              </th>
              <td>
                <input
                  type="number"
                  name={`${data}Price`}
                  id={`${data}Price`}
                  value={Number(formData[data + "Price"])}
                  onChange={handleChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Total</th>
            <td>{formData.totalPrice}</td>
          </tr>
        </tfoot>
      </table>

      <fieldset className="border border-black">
        <legend>Taxes</legend>
        <div className="small-receipt-form__taxes-container">
          <input
            type="radio"
            name="taxes"
            id="default_tax"
            value="0"
            checked={formData.taxes === "0"}
            onChange={handleChange}
          />
          <label htmlFor="default_tax">0%</label>
        </div>

        <div className="small-receipt-form__taxes-container">
          <input
            type="radio"
            name="taxes"
            id="local_tax"
            value="8.9"
            checked={formData.taxes === "8.9"}
            onChange={handleChange}
          />
          <label htmlFor="local_tax">8.9%</label>
        </div>
      </fieldset>

      <fieldset className="border border-black">
        <legend>Type of purchase</legend>
        <div className="small-receipt-form__purchase-container">
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

        <div className="small-receipt-form__purchase-container">
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
      </fieldset>

      <hr />

      {formData.typeOfPurchase === "purchase" ? (
        <div>
          <label htmlFor="payment">Payment</label>
          <input
            type="text"
            name="payment"
            id="payment"
            value={formData.payment}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
      )}

      <button type="submit">Submit</button>
    </Form>
  );
};

export default Page;
