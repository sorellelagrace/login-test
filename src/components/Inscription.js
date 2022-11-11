import React, {useContext, useState} from 'react';
import Context from '../context/Context'

export default function Inscription() {
   //const value= useContext(Context)//resortir la valuer qui se trouve dans provider 
   const {etat, dispatch}=useContext(Context)
   const [value1, setValue1]=useState('')
   const [value2, setValue2]=useState('')

   const obj ={
     mail: value1,
     password : value2
   }

   //CONST []
   console.log(etat)
  return (
    <div className="bodyform">
      <div className="part contactform">
        <h3> Sleeknote</h3>
        <h1> Welcome Back</h1>
        <input className="unit" type="text" placeholder="login with Google"/>
        <hr/> OK LOGIN WITH EMAIL
        <div>
          <form action="">
            <div>
            <label htmlFor="">
              Email Adress
              <input type="email" placeholder="Email Adress" 
              value={value1}
              onChange={(e)=>setValue1(e.target.value)} />
            </label>
            </div>
            <div>
            <label htmlFor="">
              Password
              <input type="password" placeholder="password"
               value={value2}
              onChange={(e)=>setValue2(e.target.value)}/>
            </label>
            </div>
            <div>
            
            </div>  
          </form>
          <div className="loggin_infos">
            <label>
            <input type="checkbox" /> keep me logged in
            </label>
            <a href=""> forget your passeword?</a>
            </div>
          <button 
          onClick={() =>
            dispatch({
              type:'CONNEXION',
              payload:obj,
            })
          }>Log in</button>
          <p>
            Don't have an account?
            <a href=""> sign in</a>
          </p>
        </div>
      </div>

      <div className="part academy"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/vectors/illustration-of-a-group-of-people-eating-outdoors-at-a-restaurant-vector-id1285195940?k=20&m=1285195940&s=612x612&w=0&h=rtDPS2a4dR-Z4m9JGaTpOyaWE1V8IXEmiVHwjtF3PGI= ")',
        }}>
        <div style={{ width: 300 }}>
          <p style={{ fontSize: 18, fontWeight: '700', marginBottom: 16 }}>
            {' '}
            Sleeknote Academy
          </p>
          <p>
            {' '}
            bienvenue dans sleenote academy <br /> veuillez renseigner vos
            informations pour vous connecter a notre site{' '}
          </p>
          <button>START ACADEMY</button>
        </div>
      </div>
    </div>
  );
}