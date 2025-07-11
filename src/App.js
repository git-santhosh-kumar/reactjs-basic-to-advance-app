import './App.css';
import { BrowserRouter,Routes ,Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

import Home from "./Pages/index";
import About from "./Pages/about";
import Services from "./Pages/services";
import Contacts from "./Pages/contacts";
import UserList from './Pages/user-list';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>
        
        <main className="main-wrapper">
          {/* <marquee> */}
            <em className='bg-green-200'>** Main Content - Add your code here. **</em>
          {/* </marquee> */}

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/services" element={<Services/>} />          
          </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
