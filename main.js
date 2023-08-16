const menuCategories = {

appetizers: [
  {
    name: "HTML5 Hummus Platter",
    price: 8.99,
    description:
      "A platter of assorted hummus flavors served with crispy pita chips and vegetable sticks, a tribute to the foundational HTML5 technology.",
    favorite: true
  },
  {
    name: "CSS Crispy Calamari",
    price: 10.99,
    description:
      "Crispy fried calamari rings served with a tangy CSS-inspired dipping sauce, creating a playful contrast of textures."
  },
  {
    name: "Vue Veggies Tempura",
    price: 9.49,
    description: "Lightly battered and fried seasonal vegetables, served with a Vue.js-inspired sweet chili dipping sauce."
  },
],

mainCourses: [
  {
    name: "MVC Mixed Grill",
    price: 18.99,
    description:
      "A combination of grilled meats including C#-seasoned chicken, .Net-marinated steak, and Node-infused lamb chops, served with a side of Bootstrap-baked vegetables.",
    favorite: true,
  },
  {
    name: "Bootstrap BBQ Burger",
    price: 13.99,
    description:
      "A juicy burger topped with melted cheese, crispy bacon, and Bootstrap-inspired BBQ sauce, served with a side of MVC coleslaw.",
  },
  {
    name: "C# Seafood Symphony",
    price: 22.99,
    description:
      "A medley of seared seafood, including CSS-coated scallops, HTML5-crusted salmon, and Vue-infused shrimp, served over a bed of Node-powered risotto.",
    favorite: true
  },
  {
    name: "Node Noodle Stir-Fry",
    price: 15.99,
    description:
      "Wok-tossed noodles with fresh vegetables and your choice of protein, tossed in a savory Node.js-inspired sauce.",
  },
],

sideDishes: [
  {
    name: ".NET Nacho Tower",
    price: 11.99,
    description:
      "Layered nachos with melted cheese, black beans, jalapeños, and sour cream, served in a .Net architecture reminiscent presentation.",
    favorite: true,
  },
  {
    name: "Dynamic CSS Salad",
    price: 7.49,
    description:
      "A dynamic salad with mixed greens, roasted nuts, dried fruits, and a customizable array of dressings to suit your tastes.",
  },
],

desserts: [
  {
    name: "Vue Vanilla Parfait",
    price: 6.99,
    description:
      "A dynamic salad with mixed greens, roasted nuts, dried fruits, and a customizable array of dressings to suit your tastes.",
  },
  {
    name: "Node Nutty Brownie",
    price: 7.99,
    description:
      "Warm chocolate brownie topped with nuts and a scoop of Node.js-powered coffee ice cream, creating a harmonious blend of flavors.",
    favorite: true,
  },
  {
    name: "Responsive Raspberry Cheesecake",
    price: 8.49,
    description:
      "A classic cheesecake infused with fresh raspberries, served with HTML5-inspired raspberry coulis and CSS-spun sugar decorations.",
  },
],

beverages: [
  {
    name: "CodeBrew Coffee",
    price: 3.99,
    description:
      "A carefully crafted blend of coffee beans from different regions, representing the blend of languages taught at CodeWorks.",
    favorite: true,
  },
  {
    name: "TechTonic Tea",
    price: 2.99,
    description:
      "A selection of aromatic teas, each named after a programming technology, providing a soothing and refreshing experience.",
  },
  {
    name: "Node Nectar",
    price: 4.49,
    description:
      "A fruity and refreshing mocktail infused with Node.js spirit, served with a garnish of fresh herbs and citrus slices.",
  },
],
}


function drawFavorites() {
  let menuString = ''
  for (let i in menuCategories) {
  Object.values(menuCategories[i]).map(item => {
      if(item.favorite) {
        menuString += `
         <div class="col-4">
              <p>${item.name}</p>
              <p>${item.price}</p>
            </div>
        `;
      }
    })
  }
  console.log(menuString)
  let menuElem = document.getElementById("menuItems")
  menuElem.innerHTML = menuString
}

drawFavorites()
