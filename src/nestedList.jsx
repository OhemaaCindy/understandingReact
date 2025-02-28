import React from "react";

const categories = [
  {
    name: "Electronics",
    subcategories: ["Laptops", "Phones", "Tablets"],
  },
  {
    name: "Clothing",
    subcategories: ["Shirts", "Pants", "Jackets"],
  },
];

const NestedList = () => {
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          {category.name}
          <ul>
            {category.subcategories.map((sub, subIndex) => (
              <li key={subIndex}>{sub}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default NestedList;
