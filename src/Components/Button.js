export default function Button (props) {
    return (
        <div>
            <button onClick={props.getData}>{props.buttonValue}</button>
        </div>
    )
}