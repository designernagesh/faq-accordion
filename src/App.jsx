import { useState } from "react";
import data from "./data/data.jsx";

function App() {
  const [openAccordion, setOpenAccordion] = useState(data[0].id);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <>
      <div className="container">
        <h2 className="title">FAQ Accordion</h2>
        <p className="sub-title">
          Expand each accordion by clicking on the buttons! 😊
        </p>

        <div className="accordion">
          {data.map((item) => {
            return (
              <div className="wrapper" key={item.id}>
                <div className={`question ${openAccordion === item.id ? 'open' : '' }`} onClick={()=>toggleAccordion(item.id)}>
                  {item.question}
                  <i className={`fas icon ${openAccordion === item.id  ? 'fa-minus' : 'fa-plus' }`}></i>
                </div>
                <div className={`content ${openAccordion === item.id ? 'open marginTop' : '' }`}>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
