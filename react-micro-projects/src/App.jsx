import Cart from "./components/Cart";
import Greetings from "./components/Greetings";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";
import './index.css'; 


const App = () => {
  return <section>
    <Cart />
    <Weather temprature={22}/>
    <UserStatus isAdmin={false} loggedIn={false}/>
    <Greetings timeOfDay="morning" />
  </section>
}

export default App;