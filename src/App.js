import React,{useEffect,useContext} from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/Context';
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './store/postContext';


function App() {
  const {setUser} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/view' element={<ViewPost />} />
        </Routes>
      </BrowserRouter>
      </Post>
    </div>
  );  
}

export default App;
