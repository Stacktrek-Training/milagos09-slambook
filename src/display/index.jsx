import "./style.css";

export default function Display({ details, setSubmit }) {
    return (
        <div>
            <h1>{details.name}</h1>
            <br />
            <p>{details.age}</p>
            <br />
            <p>{details.contactNumber}</p>
            <br />
            <h1>Favorites</h1>
            <br />
            <p>{details.favoriteColor}</p>
            <br />
            <p>{details.favoriteFood}</p>
            <br />
            <button onClick={() => setSubmit(false)}>Back</button>
        </div>
    );
}
