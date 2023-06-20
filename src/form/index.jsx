import "./style.css";
export default function Form({ setDetails, setSubmit }) {
    const formChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        setDetails((prev) => ({ ...prev, [property]: value }));
    };

    const submit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    return (
        <form onChange={formChange} onSubmit={submit}>
            <label>
                Name: <input id="name" />
            </label>
            <label>
                Age: <input id="age" />
            </label>
            <label>
                Contact Number: <input id="contactNumber" />
            </label>
            <label>
                Favorite color: <input id="favoriteColor" />
            </label>
            <label>
                Favorite food: <input id="favoriteFood" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
