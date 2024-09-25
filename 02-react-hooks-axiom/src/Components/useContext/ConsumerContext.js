
import { useContext } from "react";
import CreateContext from "./CreateContext";


const ConsumerContext = () =>{

        const itemList = useContext(CreateContext)
    return(
        <div>
            {/* The advantage of setting deafult value in Create context ( item:[]) 
                 is it gives auto pop up after itemlist.
            */}
            <h3>{itemList.items}</h3>  
                                        
        </div>
    )

}

export default ConsumerContext;