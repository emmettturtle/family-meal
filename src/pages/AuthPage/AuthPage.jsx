import { useState } from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc";


export default function AuthPage({setUser, setRestarauntProfile}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className='flex items-center justify-center'>
      <div className='m-20'>
        <span onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 
            <div className='flex items-center justify-center'>
              <span>Not yet a user? <span className='text-blue'>Sign Up</span></span>
            </div>
            : 
            <div className='flex items-center justify-center'>
              <span>Already a user? <span className='text-blue'>Login</span></span>
            </div>
          }
        </span>
        <br /><br />
        <div>
          {showLogin ? 
            <LoginForm setUser={setUser} setRestarauntProfile={setRestarauntProfile}/> 
            : 
            <SignUpFormFunc setUser={setUser} 
          />}
        </div>
      </div>
    </main>
  );
}