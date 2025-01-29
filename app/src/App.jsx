import { useState } from "react";
import SignUpCard from "./components/SignUpCard";
import { SuccessMessage } from "./components/SuccessMessage";

function App() {
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [validEmail, setValidEmail] = useState("");

  return (
    <>
      {isEmailValid === true ? (
        <SuccessMessage
          setIsEmailValid={setIsEmailValid}
          validEmail={validEmail}
        />
      ) : (
        <SignUpCard
          setIsEmailValid={setIsEmailValid}
          isEmailValid={isEmailValid}
          setValidEmail={setValidEmail}
        />
      )}
    </>
  );
}

export default App;
