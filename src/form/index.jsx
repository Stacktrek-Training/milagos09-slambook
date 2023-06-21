import "./style.css";
export default function Form({ setDetails, setSubmit, details }) {
    const { name, age, contactNumber, favoriteFood, favoriteColor } = details;
    const formChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        setDetails((details) => ({ ...details, [property]: value }));
    };

    const submit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    return (
        <form onChange={formChange} onSubmit={submit}>
            <label>
                Name: <input id="name" value={name} />
            </label>
            <label>
                Age: <input id="age" value={age} />
            </label>
            <label>
                Contact Number: <input id="contactNumber" value={contactNumber} />
            </label>
            <label>
                Favorite color: <input id="favoriteColor" value={favoriteColor} />
            </label>
            <label>
                Favorite food: <input id="favoriteFood" value={favoriteFood} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
