import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import MemberCreatePage from '../MemberCreatePage/MemberCreatePage';
import RestCreatePage from '../RestCreatePage/RestCreatePage';
import HomePage from '../HomePage/HomePage';
import NewRestPostPage from '../NewRestPostPage/NewRestPostPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [memberProfile, setMemberProfile] = useState(null);
  const [restarauntProfile, setRestarauntProfile] = useState(null);

  return (
    <main className="App">
      {/* logged in user and profile, community member state and res member state */}
      { user && (memberProfile || restarauntProfile) ?
          <>
            <NavBar user={user} setUser={setUser} setRestarauntProfile={setRestarauntProfile}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/rest-post/new" element={<NewRestPostPage />}/>
              <Route path='/*' element={<Navigate to='/home'/>}/>
            </Routes>
          </>
          :
          <Routes>
            <Route path="/auth" element={<AuthPage 
              setUser={setUser} 
              setRestarauntProfile={setRestarauntProfile}
            />}/>
            <Route path='/member' element={<MemberCreatePage/>}/>
            <Route path='/rest' element={<RestCreatePage setRestarauntProfile={setRestarauntProfile}/>}/>
            <Route path='/*' element={<Navigate to='/auth'/>}/>
          </Routes>
      }
    </main>
  );
}
