import React, { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';


const SignIn = () => {
 
  const [ formData, setFormData ] =useState({});
  const [ error,setError ] = useState(null);
  const [ loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();
    setLoading(true);
    const res =  await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success === false){
      setError(data.message);
      setLoading(false);
      console.log(data);
      return;
    }
    setLoading(false);
    setError(null);
    navigate("/home");
  } catch(error){
    setError(error.message);
    setLoading(false);
  }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'onChange={handleChange} required/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'onChange={handleChange} required/>
        <button 
          disabled = {loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            { loading ? 'Loading..' :'sign in' }
        </button>
      </form>
      <div className='flex gap-2 mt-5 mx-auto mx-auto'>
        <p>Dont have an account ?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>sign-up</span>
        </Link>
      </div>
      <div>
        <p className='text-red-700'>{ error ? error :  ""}</p>
      </div>
    </div>
  )
}

export default SignIn