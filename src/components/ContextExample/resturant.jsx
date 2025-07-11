import AddressContext from "./addressContext";
import { useContext } from "react"

export default function Restaurant()
{
       const addr = useContext(AddressContext);
    return(
        <div>
            <h1> Restaurant Application</h1>
            <h5>{addr}</h5>
        </div>
    )
}