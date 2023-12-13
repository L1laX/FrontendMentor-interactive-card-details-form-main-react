import { useState } from "react";
import "./App.css";
import Cardsection from "./components/Cardsection";
import Formsection from "./components/Formsection";
import Thankyou from "./components/Thankyou";

function App() {
  const [isComplete, setComplete] = useState(false);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  //
  const [validateName, setValidateName] = useState("");
  const [validateNumber, setValidateNumber] = useState("");
  const [validateMonth, setValidateMonth] = useState("");
  const [validateYear, setValidateYear] = useState("");
  const [validateCvv, setValidateCvv] = useState("");

  const userValidated = {
    validateName: validateName,
    validateNumber: validateNumber,
    validateMonth: validateMonth,
    validateYear: validateYear,
    validateCvv: validateCvv,
  };

  const userData = {
    cardName: cardName,
    cardNumber: cardNumber,
    expMonth: expMonth,
    expYear: expYear,
    cvv: cvv,
  };

  function handleChange(event) {
    let value = event.target.value;
    const inputName = event.target.name;
    if (inputName === "name") {
      let inputValue = value;
      setCardName(inputValue);
    } else if (inputName === "number") {
      let inputValue = value.replace(/\s/g, ""); // Remove non-digit characters
      let formattedValue = inputValue.replace(/(\S{4})/g, "$1 "); // Add a space after every 4 digits
      formattedValue = formattedValue.trim(); // Remove trailing space
      value = formattedValue;
      setCardNumber(value);
    } else if (inputName === "month") {
      let inputValue = value.replace(/\D/g, "");
      if (inputValue > 12) {
        inputValue = 12;
      }
      setExpMonth(inputValue);
    } else if (inputName === "year") {
      let inputValue = value.replace(/\D/g, "");
      setExpYear(inputValue);
    } else if (inputName === "cvvNumber") {
      let inputValue = value.replace(/\D/g, "");
      setCvv(inputValue);
    }
  }

  const validateData = (e) => {
    e.preventDefault();
    if (cardName.length === 0) {
      setValidateName("Can't be blank");
    } else {
      setValidateName("");
    }
    if (cardNumber.length === 0) {
      setValidateNumber("Can't be blank");
    } else if (cardNumber.match(/^[0-9\s]*$/) && cardNumber.length === 19) {
      setValidateNumber("");
    } else {
      setValidateNumber("Wrong formet");
    }
    if (expMonth.length == 0) {
      setValidateMonth("Can't be blank");
    } else if (expMonth.length !== 2) {
      setValidateMonth("Wrong formet");
    } else {
      setValidateMonth("");
    }
    if (expYear.length == 0) {
      setValidateYear("Can't be blank");
    } else if (expYear.length !== 2) {
      setValidateYear("Wrong formet");
    } else {
      setValidateYear("");
    }
    if (cvv.length == 0) {
      setValidateCvv("Can't be blank");
    } else if (cvv.length < 3) {
      setValidateCvv("Wrong formet");
    } else {
      setValidateCvv("");
    }
    if (
      cardName.length !== 0 &&
      cardNumber.match(/^[0-9\s]*$/) &&
      cardNumber.length === 19 &&
      expMonth.length === 2 &&
      expYear.length === 2 &&
      cvv.length === 3
    ) {
      handleComplete();
    }
  };

  const handleComplete = () => {
    if (isComplete === false) {
      setComplete(true);
    } else {
      setComplete(false),
        setCardName(""),
        setCardNumber(""),
        setExpMonth(""),
        setExpYear(""),
        setCvv("");
    }
  };

  return (
    <section className="flex h-screen flex-col items-center xl:flex-row">
      <Cardsection pushData={userData} />
      {isComplete ? (
        <Thankyou onComplete={handleComplete} />
      ) : (
        <Formsection
          getUser={userData}
          getData={handleChange}
          getvalidateData={validateData}
          userValidated={userValidated}
        />
      )}
    </section>
  );
}

export default App;
