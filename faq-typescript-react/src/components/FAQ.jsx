// This is a React functional component for displaying FAQs

import { useState } from "react";
import data from "./faqData";
import FAQAvatar from '../images/faq.jpg';

const FAQ = () => {
  const [isMultiSelectEnabled, setIsMultiSelectEnabled] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(data[0]?.id);

  const handleSelection = (questionId) => {
    if (isMultiSelectEnabled) {
      setSelectedQuestions((prevSelected) =>
        prevSelected.includes(questionId)
          ? prevSelected.filter((id) => id !== questionId)
          : [...prevSelected, questionId]
      );
    } else {
      setActiveQuestion(activeQuestion === questionId ? null : questionId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        {/* Left Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-sm text-indigo-600 font-semibold">MOST ASKED QUESTIONS</h2>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">FAQs</h1>
          </div>
          <p className="mt-4 text-gray-600">
            Check the most asked FAQs about TypeScript. Learn how it can improve your development process with its powerful features and benefits.
          </p>
          <div className="mt-6">
            <img 
              src={FAQAvatar} 
              alt="FAQ Avatar" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 w-full">
          <div className="flex justify-end mb-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMultiSelectEnabled(false)}
                className={`px-4 py-2 rounded ${!isMultiSelectEnabled ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
              >
                Single Selection
              </button>
              <button
                onClick={() => setIsMultiSelectEnabled(true)}
                className={`px-4 py-2 rounded ${isMultiSelectEnabled ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
              >
                Multiple Selection
              </button>
            </div>
          </div>
          {data && data.length > 0 ? (
            data.map((dataItem) => {
              const isActive = isMultiSelectEnabled
                ? selectedQuestions.includes(dataItem.id)
                : activeQuestion === dataItem.id;
              return (
                <div key={dataItem.id} className="mb-4">
                  <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div
                      onClick={() => handleSelection(dataItem.id)}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <div className={`text-lg font-semibold ${isActive ? 'text-indigo-600' : ''}`}>
                        <h3>{dataItem.question}</h3>
                      </div>
                      <span className="text-2xl">{isActive ? '-' : '+'}</span>
                    </div>
                    <div
                      className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isActive ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <div className="mt-2 text-gray-700">
                        <p>{dataItem.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-500">No data found!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
