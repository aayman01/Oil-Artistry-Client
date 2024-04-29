import { useEffect, useState } from "react";
import ArtsAndCraftCategoriesCard from "../../Components/ArtsAndCraftCategoriesCard";

const ArtsAndCraftCategories = () => {
  const [subCategory, setSubcategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/subcategory")
      .then((res) => res.json())
      .then((data) => {
        setSubcategory(data);
      });
  }, []);
  return (
    <div className="mb-14">
      <div className="mb-14">
        <h2 className="text-4xl text-center font-bold">
          Art & Craft Categories
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subCategory.map((category) => (
          <ArtsAndCraftCategoriesCard
            key={category._id}
            category={category}
          ></ArtsAndCraftCategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default ArtsAndCraftCategories;
