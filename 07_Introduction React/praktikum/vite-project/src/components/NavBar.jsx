export default function NavBar(props) {
    return (
        <div>
            <h1>Ini adalah props dari app = {props.name}</h1>
            {props.name === "john" && (<p>hai kamu adalah admin {props.name}</p>)}
        </div>
    )
}