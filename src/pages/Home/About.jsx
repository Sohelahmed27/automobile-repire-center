import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content relative">
    <div className="w-1/2">
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/4 border-white rounded-lg shadow-2xl absolute top-1/2 right-1/2" />
    </div>
    <div className='w-1/2 space-y-3 '>
    <h3 className='text-3xl font-bold text-orange-500'>About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field!</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
  );
};

export default About;