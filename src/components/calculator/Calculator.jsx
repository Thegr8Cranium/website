import React from "react";
import "./calculator.css";

const Calculator = () => {
  return (
    <>
      <div className="calculatorPage">
        <h3 className="calculatorHead">PROFIT Calculator</h3>
        <form action="" method="post">
          <div className="calculator">
            <div>
              <label for="selectPlan">
                Select Plan
                <select id="selectPlan" name="selectPlan">
                  <option value="1">BASIC PLAN</option>
                  <option value="2">SILVER PLAN</option>
                  <option value="3">GOLD PLAN</option>
                </select>
              </label>
            </div>
            <div>
              <label for="amount">
                Deposit Amount
                <input
                  id="amount"
                  type="number"
                  name="amount"
                  min="100"
                  max="10000"
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Calculator;
