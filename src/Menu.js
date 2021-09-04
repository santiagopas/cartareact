import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <div className='item-info'>
              <header>
                <h2 className="item-title">{title}</h2>
                <p className='item-text'>{desc}</p>
              </header>
              <div className="imgContainer"> 
              <img src={img} width="150" height="250" alt={title} className='photo' />
                <h3 className='price'>${price}</h3>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
