// Example simple list of categories
// Ref: https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/21949006#overview

// TODO: Get list from API
// Request: GET http://localhost:8080/api/categories
// Response:
// ["Ab-solutely!","Arm Attack","Buns of Steel","Fancy Feet","Grapevine Combo","High Intensity Burn","Squats","Warm Up","Cool Down"]

// Example proper list of categories
// Ref: https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/21949012#overview

// named export
export const categories = [
  { id: 1, name: "Warm Up", img: "./img/Warm Up/Warm Up.jpg" },

  {
    id: 2,
    name: "Grapevine Combo",
    img: "./img/Grapevine Combo/Grapevine Combo.jpg",
  },
  { id: 3, name: "Fancy Feet", img: "./img/Fancy Feet/Fancy Feet.jpg" },
  { id: 4, name: "Squats", img: "./img/Squats/Squats.jpg" },
  { id: 5, name: "Arm Attack", img: "./img/Arm Attack/Arm Attack.jpg" },
  {
    id: 6,
    name: "High Intensity Burn",
    img: "./img/High Intensity Burn/High Intensity Burn.jpg",
  },
  { id: 7, name: "Abs-Olutely!", img: "./img/Abs-Olutely!/Abs-Olutely!.jpg" },
  {
    id: 8,
    name: "Buns of Steel",
    img: "./img/Buns of Steel/Buns of Steel.jpg",
  },
  { id: 9, name: "Cool Down", img: "./img/Cool Down/Cool Down.jpg" },
];
