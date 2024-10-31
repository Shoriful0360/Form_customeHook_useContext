import { useCallback, useContext } from "react";
import { MoneyContext } from "../GrandFateher/GrandFather";



const Cousing = ({cousin}) => {
    const gift=useContext(MoneyContext)
    return (
        <div>
            <h2>Cousin</h2>
            <h2>{cousin}</h2>
            <p>gift for you: {gift}</p>
        </div>
    );
};

export default Cousing;