import { useState } from "react";
import Form from "./form";
import Display from "./display";

function App() {
    const [details, setDetails] = useState({
        name: "",
        age: "",
        contactNumber: "",
        favoriteFood: "",
        favoriteColor: "",
    });
    const [isSubmitted, setSubmit] = useState(false);
    return (
        <>
            {isSubmitted ? (
                <Display details={details} setSubmit={setSubmit} />
            ) : (
                <Form setDetails={setDetails} setSubmit={setSubmit} details={details} />
            )}
        </>
    );
}

export default App;
