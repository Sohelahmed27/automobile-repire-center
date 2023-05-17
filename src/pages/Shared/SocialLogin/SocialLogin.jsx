import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext)
  const handleGoogleSign = ()=> {
    googleSignIn()
    .then(result =>{
      console.log(result.user)
    })
    .catch(err =>console.log(err))

  }
  return (
    <div>
  
  <div className="divider">OR</div>
 

<div>
<button onClick={handleGoogleSign} className="btn btn-circle btn-outline">
  
</button>
</div>
    </div>
  );
};

export default SocialLogin;