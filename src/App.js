import './App.css';
import Header from './components/Header'
import CounterCard from './components/CounterCard'
import HelloCard from './components/ClassComponents/CounterCard'
import Footer from './components/Footer'
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main-wrapper">
        {/* <marquee> */}
          <em>** Main Content - Add your code here. **</em>
        {/* </marquee> */}
        
        <CounterCard />
        <br />
        <HelloCard msg="Hello from Parent Component"/>

        <UserList />        
      </main>

      <Footer />
    </div>
  );
}

export default App;
