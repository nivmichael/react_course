
import { useState } from 'react';
import Cart from './components/Cart';
import './index.css';
import Movies from './components/Movies';
import StateComponentOne from './components/StateComponentOne';
import StateComponentTwo from './components/StateComponentTwo';
import CounterTest from './challenges/useState/CounterTest';
import TodoListTest from './challenges/useState/TodoListTest';
import ProfileTest from './challenges/useState/ProfileTest';
import ShoppingListTest from './challenges/useState/ShoppingListTest';


const App = () => {
  const [count, setCount] = useState(0);

  const [movie, setMovie] = useState({
    title: "Titanoc",
    ratings: 7,
  });

  const handleClickM = () => setMovie({ ...movie, ratings: 5 })

  return <section>
    <h1>{movie.title}</h1>
    <p>{movie.rating}</p>
    <button onClick={handleClickM}>Change rating</button>
    <Cart />

    <Movies />

    <br />
    <br />
    <br />
    <StateComponentOne count={count} onClickHandleCount={() => setCount(count + 1)} />
    <StateComponentTwo count={count} onClickHandleCount={() => setCount(count + 1)} />
    <CounterTest />
    <TodoListTest />
    <ProfileTest />
    <br />
    <br />
    <br />
    <ShoppingListTest />
  </section>
}

export default App;