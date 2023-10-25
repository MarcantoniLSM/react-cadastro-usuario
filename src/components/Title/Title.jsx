import "./Title.css"
export default function Title(props){
    return(
        <div className="title">
            <h1>{props.children}</h1>
            <hr />
        </div>
    )
}