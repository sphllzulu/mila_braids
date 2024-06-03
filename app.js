const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Knotless Braids",
      price: 150,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Twists",
      price: 150,
      colors: [
        {
          code: "lightgray",
          img: "./img/Knotless Twists.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Box Braids",
      price: 150,
      colors: [
        {
          code: "lightgray",
          img: "./img/Brown boho.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Boho/Goddess",
      price: 200,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Curly Ends",
      price: 250,
      colors: [
        {
          code: "black",
          img: "./img/Curly Ends.png",
        },
        {
          code: "ginger",
          img: "./img/GingerC.png",
        },
      ],
    },
  ];

  let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



menuItems.forEach((item,index)=>{
    //this code changes the current slide
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100*index}vw)`;
          //this code changes the chosen product
        chosenProduct=products[index]

        //change text
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = "R"+ chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    });
});
 currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = chosenProduct.colors[index].img
    });
 });

 currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
        
    });
 });


 const productButton= document.querySelector(".productButton");
 const payment=document.querySelector(".payment");
 const close=document.querySelector(".close");

 productButton.addEventListener("click",()=>{
    payment.style.display="flex"
 })
 close.addEventListener("click",()=>{
    payment.style.display="none"
 })