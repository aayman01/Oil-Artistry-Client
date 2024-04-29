import { Link, useLoaderData } from "react-router-dom";

const AllIteams = () => {
  const loadedData = useLoaderData();
  console.log(loadedData)
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
              <tr className="text-lg text-white font-normal bg-[#B81D33]">
                <th></th>
                <th>Item name</th>
                <th>Status</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            {loadedData.map((data, idx) => (
              <tbody key={data._id}>
                <tr className="text-lg font-normal bg-[#fbe7ea]">
                  <th>{idx + 1}</th>
                  <td>{data.item_name}</td>
                  <td>{data.status}</td>
                  <td>{data.price}</td>
                  <Link to={`/viewdeatils/${data._id}`}>
                    <button className=" mt-2 text-white rounded-lg hover:bg-stone-200 hover:text-black font-medium px-2 md:px-3 py-1 bg-[#B81D33]">
                      View deatils
                    </button>
                  </Link>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
};

export default AllIteams;