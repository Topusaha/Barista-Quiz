import React, { Component, useEffect, useState } from "react";


const RecpieChoices = ({ handleChange, label, choices, checked }) => {

    return (
        <div className="radio-buttons">
        {choices &&
          choices.map((choice) => (
            <li key={choice}>
              <input
                id={choice}
                value={choice}
                name={label}
                type="radio"
                onChange={handleChange}
                checked={checked == choice}
              />
                {choice}
            </li>
          ))}
      </div>
    );
};

export default RecpieChoices;