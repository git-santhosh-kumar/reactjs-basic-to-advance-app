import AddressContext from "./addressContext";
import Customer from "./customer";
import Restaurant from "./resturant";

export default function Parent() {
    const addr = "HSR layout, Blore";
    return(
        <div>
            <AddressContext.Provider value={addr}>
                <Customer/>
                <Restaurant/>
            </AddressContext.Provider>
        </div>
    )
}