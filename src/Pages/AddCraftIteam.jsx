import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddCraftIteam = () => {
    const {user} = useContext(AuthContext);
    const handleAdd = e => {
      e.preventDefault();
      
      const form =  e.target;
      const status = form.stockStatus.value;
      const item_name = form.item_name.value;
      const short_description = form.short_description.value;
      const subcategory_Name = form.subcategory_Name.value;
      const price = form.price.value;
      const photoUrl = form.photoUrl.value;
      const user_email = form.user_email.value;
      const user_name = form.user_name.value;
      const customization = form.customization.value;
      const rating = form.rating.value;
      const processing_time = form.processing_time.value;
    
      const addIteam = {
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
      };
      fetch("https://oil-artistry-server.vercel.app/artcraft", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addIteam),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Added Successfully",
              icon: "success",
            });
          }
        });
      // console.log(addIteam) 
      e.reset();
    }
     return (
       <div className="max-w-6xl mx-auto p-4">
         <div className="bg-[#fbe7ea] p-20 rounded-lg mt-10 mb-14">
           <h2 className="text-3xl text-center mb-7 font-bold">
             Add Craft Iteam
           </h2>
           <div className="">
             <form onSubmit={handleAdd}>
               <div className="md:flex items-center gap-4">
                 <label className="form-control md:w-1/2">
                   <div className="label">
                     <span className="label-text font-bold">Item name:</span>
                   </div>
                   <input
                     type="text"
                     name="item_name"
                     placeholder="Item name"
                     className="input input-bordered w-full "
                     required
                   />
                 </label>
                 <label className="form-control md:w-1/2">
                   <div className="label">
                     <span className="label-text font-bold">
                       Subcategory name:
                     </span>
                   </div>
                   <select
                     className="px-4 py-3 rounded-md border w-full"
                     name="subcategory_Name"
                     required
                   >
                     <option value="Landscape Painting">
                       Landscape Painting
                     </option>
                     <option value="Portrait Drawing">Portrait Drawing</option>
                     <option value="Watercolour Painting">
                       Watercolour Painting
                     </option>
                     <option value="Oil Painting">Oil Painting</option>
                     <option value="Charcoal Drawing">Charcoal Drawing</option>
                     <option value="Cartoon Drawing">Cartoon Drawing</option>
                   </select>
                 </label>
               </div>
               <div className="md:flex items-center gap-4">
                 <label className="form-control md:w-1/2">
                   <div className="label">
                     <span className="label-text font-bold">
                       short description:
                     </span>
                   </div>
                   <input
                     type="text"
                     name="short_description"
                     placeholder="Short Description"
                     className="input input-bordered w-full"
                     required
                   />
                 </label>
                 <label className="form-control md:w-1/2">
                   <div className="label">
                     <span className="label-text font-bold">price</span>
                   </div>
                   <input
                     type="text"
                     name="price"
                     placeholder="Price"
                     className="input input-bordered w-full"
                     required
                   />
                 </label>
               </div>
               <div className="md:flex items-center gap-4">
                 <label className="form-control md:w-1/2">
                   <div className="label">
                     <span className="label-text font-bold">
                       Rating: (1-10)*
                     </span>
                   </div>
                   <input
                     type="text"
                     name="rating"
                     placeholder="Rating"
                     className="input input-bordered w-full"
                     required
                   />
                 </label>
                 <label className="form-control md:w-1/2">
                   <div className="label">
                     <span className="label-text font-bold">
                       Processing time:
                     </span>
                   </div>
                   <input
                     type="text"
                     name="processing_time"
                     placeholder="Processing time in hour"
                     className="input input-bordered w-full"
                     required
                   />
                 </label>
               </div>
               <label className="form-control">
                 <div className="label">
                   <span className="label-text font-bold">Photo URL</span>
                 </div>
                 <input
                   type="text"
                   name="photoUrl"
                   placeholder="Photo URL"
                   className="input input-bordered w-full"
                   required
                 />
               </label>
               <div className="md:flex items-center gap-4">
                 <label className="form-control md:w-1/2">
                   <div className="label">
                     <span className="label-text font-bold">User Email</span>
                   </div>
                   <input
                     type="email"
                     name="user_email"
                     defaultValue={user?.email}
                     placeholder="Enter coffee Category"
                     className="input input-bordered w-full"
                     required
                   />
                 </label>
                 <label className="form-control md:w-1/2">
                   <div className="label">
                     <span className="label-text font-bold">User Name:</span>
                   </div>
                   <input
                     type="text"
                     name="user_name"
                     defaultValue={user?.displayName}
                     placeholder="Enter coffee Details"
                     className="input input-bordered w-full"
                     required
                   />
                 </label>
               </div>
               <div className="flex items-center justify-between mb-5">
                 <label className="w-1/2">
                   <div className="label">
                     <span className="label-text font-bold">StockStatus:</span>
                   </div>
                   <select
                     className="px-4 py-3 rounded-md border w-full"
                     name="stockStatus"
                     required
                   >
                     <option value="In stock">In stock</option>
                     <option value="Made to oder">Made to oder</option>
                   </select>
                 </label>
                 <label className="w-1/2 ml-3">
                   <div className="label">
                     <span className="label-text font-bold">
                       Customization:
                     </span>
                   </div>
                   <select
                     className="px-4 py-3 rounded-md border w-full"
                     name="customization"
                     required
                   >
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                   </select>
                 </label>
               </div>
               <input
                 className="btn bg-[#B81D33] hover:bg-white hover:text-[#B81D33] border-none text-lg text-white w-full font-bold"
                 type="submit"
                 value="Add"
               />
             </form>
           </div>
         </div>
       </div>
     );
};

export default AddCraftIteam;