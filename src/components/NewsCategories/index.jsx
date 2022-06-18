import React from "react";

//components
import Box from "../../UI/Box";

//icons
import { FaFolder } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

//styles
import "./categories.scss";

const data = [
  {
    id: 1,
    title: "Science",
    color: "#0A6B7F",
    count: 12,
  },
  {
    id: 2,
    title: "Tech",
    color: "#18A3A3",
    count: 8,
  },
  {
    id: 3,
    title: "Apps",
    color: "#2ECC71",
    count: 25,
  },
  {
    id: 4,
    title: "Cars",
    color: "#3498DB",
    count: 14,
  },
  {
    id: 5,
    title: "Reviews",
    color: "#0A9E01",
    count: 5,
  },
  {
    id: 6,
    title: "Phones",
    color: "#6D3600",
    count: 3,
  },
  {
    id: 7,
    title: "Cameras",
    color: "#9B59B6",
    count: 11,
  },
  {
    id: 8,
    title: "Headphones",
    color: "#F4943F",
    count: 15,
  },
  {
    id: 9,
    title: "Laptops",
    color: "#536EAD",
    count: 16,
  },
  {
    id: 10,
    title: "Tablets",
    color: "#8EBA0B",
    count: 51,
  },
];

const NewsCategories = () => {
  return (
    <Box>
      <div className="categories__container">
        <div className="categories__title">
          <div className="title">Categories</div>
          <div className="icon">
            <FaFolder />
          </div>
        </div>
        <div className="categories">
          <ul className="categories__list">
            {data.map((el) => (
              <li className="categories__list-item" key={el.id}>
                <span>
                  <FiChevronRight />
                  {el.title}
                </span>
                <span
                  style={{ backgroundColor: `${el.color}` }}
                  className="count"
                >
                  {el.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default NewsCategories;
