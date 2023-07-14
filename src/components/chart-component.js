import React, { useState } from 'react';
import Financeflow from './finance-flow';

export default function App() {
  const [showFinanceFlow, setShowFinanceFlow] = useState(false);

  const handleButtonClick = () => {
    setShowFinanceFlow(true);
  };

  return (
    <div>
      <div className="start d-flex justify-content-center align-items-center special-rounded">
        <div>
          {!showFinanceFlow && <button onClick={handleButtonClick}>Start</button>}
          {showFinanceFlow && <Financeflow />}
        </div>
      </div>
    </div>
  );
}
