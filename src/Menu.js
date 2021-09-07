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
                <div className="priceContainer">
                <h3 className='price'>${price}</h3>
                </div>
              </header>
              <div className="imgContainer">
                <img src={img} width="100" height="100" alt={title} className='photo' />

              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
