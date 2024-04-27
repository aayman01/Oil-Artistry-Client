import { useLoaderData, useParams } from "react-router-dom";
import ViewDeatil from "./ViewDeatil";

const ViewDeatils = () => {
    const loaderData = useLoaderData();
    const { id } = useParams();
    const data = loaderData.filter(data => data._id === id)

    // const {
    //   item_name,
    //   short_description,
    //   subcategory_Name,
    //   price,
    //   photoUrl,
    //   user_email,
    //   user_name,
    //   customization,
    //   rating,
    //   status,
    //   processing_time,
    // } = data;
    
    console.log(data)
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div>
          <img src={data[0].photoUrl} alt="" />
        </div>
        <h2 className="">{data[0].item_name}</h2>
      </div>
    );
};

export default ViewDeatils;