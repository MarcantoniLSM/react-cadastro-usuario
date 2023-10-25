import Title from "../Title/Title";
import "./Layout.css"

export default function Layout(props){
    return(
        <div className="layout rounded-md">
            <Title>{props.Title}</Title>
                {props.children}
        </div>
    )
}