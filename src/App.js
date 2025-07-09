import './App.css';
import Header from './components/Header'
import CounterCard from './components/CounterCard'
import HelloCard from './components/ClassComponents/HelloCard'
import Footer from './components/Footer'
import UserForm from './components/UserForm';

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

        <UserForm />
        <p>x - paragraph</p>
        <p>x - paragraph</p>

        <p>x - paragraph</p>
        <p>x - paragraph</p>

        <p>x - paragraph</p>
        <p>x - paragraph</p>
        v
        <p>x - paragraph</p>
        <p>x - paragraph</p>
        <p>x - paragraph</p>
        <p>x - paragraph</p>
        <p>x - paragraph</p>
        <p>x - paragraph</p>
        <p>x - paragraph</p>
        <p>x - paragraph</p>


        <p>x - paragraph</p>
        <p>x - paragraph</p>
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
