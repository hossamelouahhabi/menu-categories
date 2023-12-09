import './App.css';
import { useState } from 'react';
import menu from './Data';
import Categories from './components/Categories';
import Menu from './components/Menu';

function App() {
  const [menuItems, setManuItems] = useState(menu)
  const [categories, setCategories] = useState([])
  return (
    <main>
      <section className='manu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
