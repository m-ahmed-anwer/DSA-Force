"use client";
import React, { useState } from "react";

const CheckBox = (props: { checked: boolean; qId: number; id: number }) => {
  const [checked, setChecked] = useState(props.checked);

  const updateCheck = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/updateData/${props.qId}/${props.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ checked: !checked }), // Toggle the checked value
        }
      );

      if (!res.ok) {
        throw new Error("Failed to Fetch");
      }

      // Update the local state based on the response
      setChecked(!checked);
      console.log("Data submitted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = () => {
    updateCheck();
  };

  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default CheckBox;
