import './App.css';
import { useState } from 'react';
import menu from './Data';
import Categories from './components/Categories';
import Menu from './components/Menu';

function App() {
  const [menuItems, setManuItems] = useState(menu)
  const [categories, setCategories] = useState([])

  const handleAllCategories = () => {
    const newItems = menu.map((item) => {
        return item;
    })
    setManuItems(newItems)
  }

  const handleBreakfastCategorie = () => {
    const newItems = menu.filter((item) => {
      if(item.category == 'breakfast'){
        return item;
      }
    })
    setManuItems(newItems)
 }

  const handleLunchCategorie = () => {
    const newItems = menu.filter((item) => {
      if(item.category == 'lunch'){
        return item;
      }
    })
    setManuItems(newItems)
 }

  const handleShakesCategorie = () => {
    const newItems = menu.filter((item) => {
      if(item.category == 'shakes'){
        return item;
      }
    })
    setManuItems(newItems)
 }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories all={handleAllCategories} breakfast={handleBreakfastCategorie} lunch={handleLunchCategorie} shakes={handleShakesCategorie}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
