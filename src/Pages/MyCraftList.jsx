import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyCraftCard from "../Components/MyCraftCard";

const MyCraftList = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState("");
    // console.log(items)
    useEffect(()=>{
        fetch(`http://localhost:5000/mycraft/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setItems(data);
            if(data.length === 0){
                setEmpty("You haven't Added any iteam yet")
            }
          });
    },[user])
    return (
      <div className="max-w-6xl mx-auto px-4">
        {<h2 className="my-6 text-center text-bold text-3xl">{empty}</h2>}
        <h2 className="my-6 text-center text-bold text-3xl">
          My Art&Craft List
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {
                items.map(item => <MyCraftCard key={item._id} item={item} items={items} setItems={setItems}></MyCraftCard> )
            }
        </div>
      </div>
    );
};

export default MyCraftList;