import { useEffect, useState } from "react";
import CraftItemCard from "../../Components/CraftItemCard";


const CraftIteams = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/artcraft")
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
    },[])
    return (
      <div className="my-28">
        <div className="mb-10">
          <h2 className="text-4xl text-center font-bold">Craft Items</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.slice(0, 6).map((item) => (
            <CraftItemCard key={item._id} item={item}></CraftItemCard>
          ))}
        </div>
      </div>
    );
};

export default CraftIteams;