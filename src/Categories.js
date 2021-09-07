import React from 'react';
import {CgMenuRound} from 'react-icons/cg'

const Categories = ({ categories, filterItems }) => {
  return (
    <nav className="btn-container">
      <CgMenuRound>
        </CgMenuRound>
      <ul>
        {categories.map((category, index) => {
          return (
            <li>
              <a
                type="button"
                href="/#"
                className="filter-btn"
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </a>
            </li>
          );
        })}
      </ul>

    </nav>
  );
};

export default Categories;
