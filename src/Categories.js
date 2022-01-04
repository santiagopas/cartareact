import React from 'react';
import { MdRestaurantMenu } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import { useState } from 'react';



const Categories = ({ categories, filterItems }, props) => {

  const [open, setOpen] = useState(false);

  const hamburguerIcon = <MdRestaurantMenu className='icon'
    size='50px'
    onClick={() => setOpen(!open)}
  />
  const closeIcon = <CgClose className='iconClose'
    size='50px' 
    onClick={() => setOpen(!open)}
  />
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className="btn-container">
      {open ? closeIcon : hamburguerIcon}
      {open && <ul className="menuContainer">
        {categories.map((category, index) => {
          return (
            <li>
              <a
                type="button"
                href="/#"
                className="filter-btn "
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </a>
            </li>
          );
        })}
      </ul>
        // isMobile={true} closeMobileMenu={closeMobileMenu}
      }
    </nav>
  );
};

export default Categories;
