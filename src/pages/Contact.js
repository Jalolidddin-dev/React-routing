import { useEffect, useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [inputValue, setInputValue] = useState([]);
  const [informations, setInformations] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const text = inputValue;

    let newArr = [...informations, { text }];

    setInformations(newArr);

    console.log(informations);

    setInputValue([]);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(informations));
  }, [informations]);

  return (
    <div>
      <h1>Contact Page ga xush kelibsiz🧑🏻‍💻</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>

      <div className="value_sec">
        {informations.map((information) => (
          <div key={information.text}>{information.text}</div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
