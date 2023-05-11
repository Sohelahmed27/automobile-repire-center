/* eslint-disable react/prop-types */


const ServiceCard = ({service}) => {
  const {title, img, price} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="font-bold text-3xl text-orange-600">${price}</p>
    
  </div>
</div>
  );
};

export default ServiceCard;