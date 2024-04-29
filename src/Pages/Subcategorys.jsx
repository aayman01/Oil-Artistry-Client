import { useLoaderData } from "react-router-dom";
import SubcategoryCard from "../Components/SubcategoryCard";

const Subcategorys = () => {
    const loadedData = useLoaderData();
   
    return (
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center font-bold text-3xl mb-12">
          Category: {loadedData[0].item_name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loadedData.map((item) => (
            <SubcategoryCard key={item._id} item={item}></SubcategoryCard>
          ))}
        </div>
      </div>
    );
};

export default Subcategorys;