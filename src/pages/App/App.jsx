import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import MemberCreatePage from '../MemberCreatePage/MemberCreatePage';
import RestCreatePage from '../RestCreatePage/RestCreatePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [memberProfile, setMemberProfile] = useState(null);
  const [restarauntProfile, setRestarauntProfile] = useState(null);

  return (
    <main className="App">
      {/* logged in user and profile, community member state and res member state */}
      { user && (memberProfile || restarauntProfile) ?
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <Routes>
            <Route path="/auth" element={<AuthPage setUser={setUser}/>}/>
            <Route path='/member' element={<MemberCreatePage/>}/>
            <Route path='/rest' element={<RestCreatePage setRestarauntProfile={setRestarauntProfile}/>}/>
            <Route path='/*' element={<Navigate to='/auth'/>}/>
          </Routes>
      }
    </main>
  );
}
