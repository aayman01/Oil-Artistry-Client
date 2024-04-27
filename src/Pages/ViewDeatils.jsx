import { useLoaderData, useParams } from "react-router-dom";

const ViewDeatils = () => {
    const loaderData = useLoaderData();
    const { id } = useParams();
    const data = loaderData.filter(data => data._id === id)

    console.log(data)
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-8">
          <img className="" src={data[0].photoUrl} alt="" />
        </div>
        <div className="mt-5 space-y-5 mb-9">
          <h2 className="text-4xl font-semibold ">{data[0].item_name}</h2>
          <p className="text-2xl font-semibold">${data[0].price}</p>
          <p className="text-xl font-semibold">Rating: {data[0].rating}</p>
          <p className="text-2xl font-semibold">Description:</p>
          <p>{data[0].short_description}</p>
          <p className="text-lg">
            <span className="text-xl font-semibold">Availability:</span>{" "}
            {data[0].status}
          </p>
          <p className="text-lg">
            <span className="text-xl font-semibold">Customization:</span>{" "}
            {data[0].customization}
          </p>
          <p className="text-lg">
            <span className="text-xl font-semibold">Processing time:</span>{" "}
            {data[0].processing_time}
          </p>
        </div>
      </div>
    );
};

export default ViewDeatils;