//import React from 'react' работает и без этого. Нужно ли импортить в свежих версиях?

// import Header from "./header"
 import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import classes from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// import Technologies from "./technologies"
// import Footer from "./footer";

const App = (props) => {



  return (
      <BrowserRouter>
        <div className = 'app-wrapper'>
            <Header />
            <Navbar />
            {/*<Profile />*/}
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile posts={props.posts}/>} />
                    <Route path="/dialogs" element={<Dialogs dialogsData={props.dialogsData} messages={props.messages}/>} />
                    {/*<Route path='/dialogs/*' element={ () => <Dialogs/>} />*/}
                </Routes>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
