import Footer from "./components/Footer";
import Greetings from "./components/Greetings";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductInfo from "./components/ProductInfo";
import User from "./components/User";

const App = () => {
  return <section>
    <Header />
    <User 
     img="https://www.mako.co.il/_next/image?url=https%3A%2F%2Fimg.mako.co.il%2F2025%2F02%2F20%2FmakoLogo2024.png&w=128&q=75"
     name="Michael Niv"
     age={18}
     isMarried={false}
     hobbies={["Coding", "Eating", "Reading"]}
    />
    <Footer>
      <h1>HIIIIII</h1>
      <div>SCSCS</div>
    </Footer>
  </section>
}

export default App;