import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyCraftCard from "../Components/MyCraftCard";

const MyCraftList = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState("");
  
    
    const handleSortYes = filter => {
      console.log(filter);
      fetch(`http://localhost:5000/craft/${filter}`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
    }
    const handleSortNo = filter => {
      console.log(filter);
      fetch(`http://localhost:5000/craft/${filter}`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
    }
    
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
        <h2 className="my-6 text-center font-bold text-3xl">
          My Art&Craft List
        </h2>
        {<h2 className="my-6 text-center text-bold text-3xl">{empty}</h2>}
        <div className="dropdown dropdown-right">
          <div
            tabIndex={0}
            role="button"
            className="bg-[#B81D33] hover:text-[#B81D33] text-white font-medium btn m-1"
          >
            Sort By Customization
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[10] menu p-2 shadow bg-white rounded-box w-52"
          >
            <li className="hover:bg-slate-200 rounded-md font-medium">
              <button onClick={() => handleSortYes("Yes")}>Yes</button>
            </li>
            <li className="hover:bg-slate-200 rounded-md font-medium">
              <button onClick={() => handleSortNo("No")}>No</button>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mb-24">
          {items.map((item) => (
            <MyCraftCard
              key={item._id}
              item={item}
              items={items}
              setItems={setItems}
            ></MyCraftCard>
          ))}
        </div>
      </div>
    );
};

export default MyCraftList;