// This is a React functional component for displaying FAQs

import { useState } from "react";
import data from "./faqData";

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  return (
    <div>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div>
            <div className="FAQ">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="FAQItems"
              >
                <div className="Question">
                  <h3>{dataItem.question}</h3>
                </div>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="Answer">
                  <p>{dataItem.answer}</p>
                </div>
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <div>No data found!</div>
      )}
    </div>
  );
};

export default FAQ;
