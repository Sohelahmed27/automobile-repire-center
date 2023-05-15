import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  console.log(service);
  const { title, price, _id, img } = service;
  const {user} = useContext(AuthContext);

  const handleBookSubmit = (event)=>{
    event.preventDefault();
    
    const form = event.target;
    const name = form. name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking ={
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id:_id,
      price:price
    }
    console.log(booking);
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers:{
         'content-type': 'application/json',
      },
      body: JSON.stringify(booking)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div>
    <h1>Services: {title}</h1>

<form onSubmit={handleBookSubmit} >
<div className="card-body">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          defaultValue={user?.displayName}
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input
          type="date"
          name="date"
          placeholder="date"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
         defaultValue={user?.email}
          type="email"
          placeholder="Email"
          name="email"
          className="input input-bordered"
        />  
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="text"
         defaultValue={'$' + price}
          className="input input-bordered"
        />  
      </div>
      </div>
      <div className="form-control mt-6">
        
        <input className="btn btn-primary btn-block" type='submit' value="Order Confirm"/>
      </div>
    </div>
</form>
  </div>
  );
};

export default BookService;