import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Enquire from './pages/Enquire'
import ProfileDetails from './pages/ProfileDetails'
import UserSettings from './pages/UserSettings'
import Footer from './components/Footer'
import './App.css'
import Plans from './components/Plans'
import UserProfileEdit from './components/UserProfileEdit'
import UserProfile from './pages/UserProfile'
import Pnf from './pages/Pnf'


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/enquire' element={<Enquire/>}/>
    <Route path='/profileDetails' element={<ProfileDetails/>}/>
    <Route path='/userSettings' element={<UserSettings/>}/>
    <Route path='/plans' element={<Plans/>}/>    
    <Route path='/userProfileEdit' element={<UserProfileEdit/>}/>  
    <Route path='/userProfile' element={<UserProfile/>}/>    
    <Route path='/login' element={<Auth/>}/>
    <Route path='/register' element={<Auth insideRegister={true}/>}/>
    <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
