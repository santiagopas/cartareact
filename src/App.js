// import React from 'react';
// import './App.css';
// import p1 from './assets/img/1.jpg'
// import p2 from './assets/img/2.jpg'
// import p3 from './assets/img/3.jpg'
// import p4 from './assets/img/4.jpg'
// import p5 from './assets/img/5.jpg'
// import p6 from './assets/img/6.jpg'
// import p7 from './assets/img/7.jpg'
// import p8 from './assets/img/8.jpg'
// function App() {
//   return (
//     <div className="App">
//       <div className="Wrapper">

//         <img src={p1} width="640" height="360" className="Pagina" alt="pagina 1" />
//         <img src={p2} width="640" height="360" className="Pagina" alt="pagina 2" />
//         <img src={p3} width="640" height="360" className="Pagina" alt="pagina 3" />
//         <img src={p4} width="640" height="360" className="Pagina" alt="pagina 4" />
//         <img src={p5} width="640" height="360" className="Pagina" alt="pagina 5" />
//         <img src={p6} width="640" height="360" className="Pagina" alt="pagina 6" />
//         <img src={p7} width="640" height="360" className="Pagina" alt="pagina 7" />
//         <img src={p8} width="640" height="360" className="Pagina" alt="pagina 8" /> 
//       </div>
//     </div>
//   );
// }
// export default App;

import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['todos', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'todos') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="wrapper">
        <div className="title">
          <h1 className="consulTitle">Bar Consultorio</h1>
          <div className="underline"></div>
        </div>
        <Menu items={menuItems} />
        <Categories categories={categories} filterItems={filterItems} />
      </section>
    </main>
  );
}

export default App;
