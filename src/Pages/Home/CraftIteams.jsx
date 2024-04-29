import { useEffect, useState } from "react";
import CraftItemCard from "../../Components/CraftItemCard";


const CraftIteams = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("https://oil-artistry-server.vercel.app/artcraft")
          .then((res) => res.json())
          .then((data) => {
            setItems(data);
          });
    },[])
    return (
      <div className="my-28 bg-[#B81D33] pb-20">
        <div className="mb-10">
          <h2 className="text-4xl text-center text-white font-bold pt-11">Craft Items</h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.slice(0, 6).map((item) => (
            <CraftItemCard key={item._id} item={item}></CraftItemCard>
          ))}
        </div>
      </div>
    );
};

export default CraftIteams;