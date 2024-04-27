import { useLoaderData } from "react-router-dom";

const AllIteams = () => {
  const loadedData = useLoaderData();
  // console.log(loadedData.length)
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-10 mb-10">
          <h2 className="text-center font-bold text-2xl">
            All Art & Craft Items
          </h2>
        </div>
        <div className="overflow-x-auto mb-16 border-2 border-black">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item name</th>
                <th>Subcategory</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>
            {loadedData.map((data, idx) => (
              <tr key={data._id}>
                <th>{idx + 1}</th>
                <td>{data.item_name}</td>
                <td>{data.subcategory_Name}</td>
                <td>{data.status}</td>
                <td>{data.price}</td>
                <button className=" mt-2 text-white rounded-lg hover:bg-stone-200 hover:text-black font-medium px-3 py-1 bg-[#B81D33]">View deatils</button>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
};

export default AllIteams;