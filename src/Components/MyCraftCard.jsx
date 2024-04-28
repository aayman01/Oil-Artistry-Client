import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ item, items, setItems }) => {
  const {
    item_name,
    short_description,
    subcategory_Name,
    price,
    photoUrl,
    user_email,
    user_name,
    customization,
    rating,
    status,
    processing_time,
    _id
  } = item;
  //   console.log(item);

  const handleDelete = (e) => {
    console.log(e);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result)
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/artcraft/${_id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const reamaining = items.filter(dt => dt._id !== _id)
              setItems(reamaining)
            }
          })
      }
    });
  };
  return (
    <div className="card card-compact bg-base-100 shadow-xl mt-7 mb-10">
      <figure>
        <img className="w-full h-[220px]" src={photoUrl} alt={item_name} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center mb-3">
          <h2 className="w-full text-xl font-semibold">{item_name}</h2>
          <p className="text-[#B81D33] font-bold text-2xl">{price}$</p>
        </div>
        <hr />
        {short_description.length > 240 ? (
          <p className="">
            <span className="font-bold">Description:</span>
            {short_description.slice(0, 230)}...
          </p>
        ) : (
          <p>{short_description}</p>
        )}
        <p>
          <span className="font-bold">Subcategory Name:</span>{" "}
          {subcategory_Name}
        </p>
        <p>
          <span className="font-bold">Rating: </span>
          {rating}
        </p>
        <p>
          <span className="font-bold">Customization:</span>
          {customization}
        </p>
        <p>
          <span className="font-bold">Status: </span>
          {status}
        </p>
        <p>
          <span className="font-bold">Processing time: </span>
          {processing_time}
        </p>
        <p>
          <span className="font-bold">Useremail: </span>
          {user_email}
        </p>
        <p>
          <span className="font-bold">Username: </span>
          {user_name}
        </p>

        <div className="card-actions justify-end">
          <Link to={`/updatedeatils/${_id}`}>
            <button className="btn bg-[#B81D33] text-white hover:text-[#B81D33] hover:bg-white font-semibold mt-2">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-[#B81D33] text-white hover:text-[#B81D33] hover:bg-white font-semibold mt-2"
          > Delete
          </button>
        </div>
      </div>
    </div>
  );
};

MyCraftCard.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  setItems: PropTypes.object.isRequired,
};

export default MyCraftCard;
