import './App.css';
import Header from './components/Header'
import CounterCard from './components/CounterCard'
import CounterCardCL from './components/ClassComponents/CounterCard'
import Footer from './components/Footer'
import UserList from './components/UserList';
import Parent from './components/ContextExample/parent';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main-wrapper">
        {/* <marquee> */}
          <em className='bg-green-200'>** Main Content - Add your code here. **</em>
        {/* </marquee> */}
        
        <Parent />
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded">
            <CounterCard />
          </div>
          <div className="p-4 rounded">
            <CounterCardCL msg="Hello from Parent Component"/>
          </div>
        </div>

        <UserList />        
      </main>

      <Footer />
    </div>
  );
}

export default App;
