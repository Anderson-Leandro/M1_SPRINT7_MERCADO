const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let ulFrutas = document.createElement("ul")
let ulBebidas = document.createElement("ul")
let ulHigiene = document.createElement("ul")

criarCard(products)
function criarCard(listaProdutos) {

  for (let i = 0; i < listaProdutos.length; i++) {

    let li = document.createElement("li")
    li.setAttribute("class", "product")


    let img = document.createElement("img")
    if (listaProdutos[i].image == undefined) {
      img.setAttribute("src", "./img/products/no-img.svg")
    } else {
      img.setAttribute("src", `${listaProdutos[i].image}`)
    }
    img.setAttribute("alt", `Imagem de um(a) ${listaProdutos[i].title}`)
    img.setAttribute("title", `Imagem de um(a) ${listaProdutos[i].title}`)
    img.setAttribute("class", "product-img")


    let main = document.createElement("main")
    main.setAttribute("class", "product-main")


    let h1 = document.createElement("h1")
    h1.setAttribute("class", "product-title")
    h1.innerText = listaProdutos[i].title


    let h5 = document.createElement("h5")
    h5.setAttribute("class", "product-category")
    h5.innerText = listaProdutos[i].category


    let strong = document.createElement("strong")
    strong.setAttribute("class", "product-price")
    strong.innerText = `R$ ${listaProdutos[i].price.toFixed(2)}`


    main.append(h1, h5, strong)

    li.append(img, main)

    let categoria = listaProdutos[i].category

    adicionaProdutoUl(li, categoria)
  }
}


function adicionaProdutoUl(li, categoria) {

  if (categoria == "Frutas") {
    ulFrutas.appendChild(li)
  }
  else if (categoria == "Bebidas") {
    ulBebidas.appendChild(li)
  }
  else if (categoria == "Higiene") {
    ulHigiene.appendChild(li)
  }
}

document.querySelector(".fruits").appendChild(ulFrutas)
document.querySelector(".drinks").appendChild(ulBebidas)
document.querySelector(".hygiene").appendChild(ulHigiene)
