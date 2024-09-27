import React, { useState } from "react";
import { getContent } from "../service/api";

const PhoneNumberForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [headers, setHeaders] = useState(null);

  const getPhone = async () => {
    try {
      const data = phoneNumber;
      console.log("Phone Number Submitted:", data);

      const response = await getContent({ phonenumber: data });

      setHeaders(response.headers);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    getPhone();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {headers && (
        <div>
          <h2>Response Headers:</h2>
          <ul>
            {Object.entries(headers).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberForm;
