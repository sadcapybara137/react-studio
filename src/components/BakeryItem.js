// TODO: create a component that displays a single bakery item
import updateCart from "../App";

export default function BakeryItem(props) {
    return <div>
                <img src = {props.url}/>
                <p> {props.name} Price: ${props.price}</p>
           </div>
}
