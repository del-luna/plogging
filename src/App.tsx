import Main from "./components/Main";
import Header from "./Navigation/Header";
import About from "./components/About";
import Mypage from "./components/Mypage";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
      </Routes>
    </>
  );
}

export default App;
