import { useContext } from "react";
import Cousing from "../Cousing/Cousing";
import { MoneyContext } from "../GrandFateher/GrandFather";



const Aunty = () => {
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
          <section className="flex">
          <Cousing cousin={'Rahmot'}></Cousing>
            <Cousing cousin={'Jamal'}></Cousing>
            <Cousing cousin={'Galib'}></Cousing>
          </section>
          <h2>Tk{money}</h2>
          <button onClick={()=>setMoney(money+1000)}>Add Tk.1000</button>
        </div>
    );
};

export default Aunty;