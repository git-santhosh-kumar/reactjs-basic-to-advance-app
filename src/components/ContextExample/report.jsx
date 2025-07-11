import { useContext } from "react"
import AddressContext from "./addressContext"

export default function Report()
{
    const addr = useContext(AddressContext);
    return(
        <div>
            <h1> Report of Customer</h1>
             <h4> Address from Parent {addr} </h4>
        </div>
    )
}