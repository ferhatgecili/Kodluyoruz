const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg?fit=2000%2C1333&ssl=1",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


const btnContainer = document.querySelector(".btn-container");

const cuisines = ["all", "japan", "korea", "china"];

cuisines.map((cuisine) => {
  const btn = document.createElement("button");
  btn.innerHTML = cuisine;
  btn.classList.add("btn", "btn-item", "btn-style", cuisine);
  btnContainer.appendChild(btn);
});


const btn_allFood = document.querySelector(".all");
const btn_japanFood = document.querySelector(".japan");
const btn_koreaFood = document.querySelector(".korea");
const btn_chinaFood = document.querySelector(".china");


const foodSection = document.querySelector(".section-center");


const showMenu = (foodCategory) => {
  if (foodCategory === "All") {
    console.log(menu);
    foodSection.innerHTML = " ";
    menu.map((foods) => {
      foodSection.innerHTML += `  <div class="menu-items col-md-6">
        <div class="menu-image">
          <img class="img-fluid" src="${foods.img}" alt="">
        </div>
        <div class="menu-info">
          <div class="menu-title"><h3>${foods.title}</h3> <p>${foods.price} $</p> </div>
          <div class="menu-text">${foods.desc}</div>
        </div>
       </div>`;
    });
  } else {
    let filteredMenu = menu.filter((item) => item.category === foodCategory);
    console.log(filteredMenu);
    foodSection.innerHTML = " ";
    filteredMenu.map((foods) => {
      foodSection.innerHTML += `  <div class="menu-items col-md-6">
        <div class="menu-image">
          <img class="img-fluid" src="${foods.img}" alt="">
        </div>
        <div class="menu-info">
          <div class="menu-title"><h3>${foods.title}</h3> <p>${foods.price} $</p> </div>
          <div class="menu-text">${foods.desc}</div>
        </div>
       </div>`;
    });
  }
};


window.addEventListener("DOMContentLoaded", () => showMenu("All"));


btn_allFood.addEventListener("click", () => showMenu("All"));
btn_chinaFood.addEventListener("click", () => showMenu("China"));
btn_japanFood.addEventListener("click", () => showMenu("Japan"));
btn_koreaFood.addEventListener("click", () => showMenu("Korea"));
