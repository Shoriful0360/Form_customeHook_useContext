import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './GrandFather.css'


export const AssetContext=createContext('gold')
export const MoneyContext=createContext(1000)

const GrandFather = () => {
    const [money,setMoney]=useState(1000)
    return (
        <div className="grandFather">
           <h1>GrandFather</h1> 
           <p>Net Balance: {money}</p>
          <MoneyContext.Provider value={[money,setMoney]}>
          <AssetContext.Provider value="gold">
          <section className="flex">
          <Father></Father>
           <Uncle></Uncle>
           <Aunty></Aunty>
          </section>
          </AssetContext.Provider>
          </MoneyContext.Provider>
        </div>
    );
};

export default GrandFather;