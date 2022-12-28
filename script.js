class Product {
  constructor(image, name, price) {
    this.image = image;
    this.name = name;
    this.price = price;
  }
  get image() {
    return this._image;
  }
  set image(value) {
    return (this._image = value);
  }
  get name() {
    return this._name;
  }
  set name(value) {
    return (this._name = value);
  }
  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }
}
const productList = [
  new Product("Cooking.png", "Cooking", 5),
  new Product("Mittens.png", "Mittens", 10),
  new Product("Socks.png", "Socks", 30),
  new Product("Toys.png", "Toys", 20),
];

const giftItems = document.querySelector(".gift-items");
//const giftItem = document.querySelectorAll(".gift-item");

productList.forEach((Element) => {
  let giftItem = `
    <div class="gift-item">
        <div class="heart-icon-cont">
            <i class="fa-regular fa-heart heart-icon" onclick="heartClick(this)"></i>
        </div>
        <img src="./assets/products/${Element._image}" alt="" />
        <h1 id="price">£${Element._price}</h1>
        <h2>${Element._name}</h2>
    </div>
    `;
  giftItems.insertAdjacentHTML("beforeend", giftItem);
});

const navbar = document.querySelector("nav");
const navbarLinks = document.querySelector("nav a");
window.addEventListener("scroll", () => {
  if (scrollY > 800) {
    navbar.style.backgroundColor = "#eb455f";
    navbarLinks.style.color = "#fff";
  } else {
    navbar.style.backgroundColor = "";
  }
});

const heartIcon = document.querySelectorAll(".heart-icon");

const heartClick = (Element) => {
  if (Element.classList.contains("heartClicked")) {
    Element.classList.remove("heartClicked");
    Element.style.animation = "heartUnClick .5s forwards ease";

    Element.style.fontWeight = "500";
  } else {
    Element.classList.add("heartClicked");
    Element.style.animation = "heartClick .7s forwards ease";
  }
};

const mailBoxBtn = document.querySelector("#mail-box-send-btn");
const body = document.querySelector("body");
const feedbackBox = document.querySelector(".feedback");
const mailEmailBox = document.querySelector("#mail-email");
const mailTextareaBox = document.querySelector("#mail-textarea");

const mailBoxControl = (message) => {
  if (
    message == "Enter an email address & message!" ||
    message == "Enter a message!" ||
    message == "Enter an email address!"
  ) {
    feedbackBox.style.backgroundColor = "#eb455f";
    feedbackBox.children[0].textContent = message;
    feedbackBox.style.right = "0";
    setTimeout(() => {
      feedbackBox.style.right = "-20vw";
    }, 4000);
  } else {
    feedbackBox.style.backgroundColor = "#21bf73";
    feedbackBox.children[0].textContent = message;
    feedbackBox.style.right = "0";
    setTimeout(() => {
      feedbackBox.style.right = "-20vw";
    }, 4000);
  }
};

mailBoxBtn.addEventListener("click", () => {
  if (mailEmailBox.value == "" && mailTextareaBox.value == "") {
    mailBoxControl("Enter an email address & message!");
  } else {
    if (mailEmailBox.value != "") {
      if (mailTextareaBox.value != "") {
        mailBoxControl("Your message has been sent!");
      } else {
        mailBoxControl("Enter a message!");
      }
    } else {
      mailBoxControl("Enter an email address!");
    }
  }
});
