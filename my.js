/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 4 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она использовала не createElement, а возвращала 
    строку с тегами, которую потом можно будет поставить в документ 
    используя innerHTML или insertAdjacentHTML. Грубо говоря - шаблон поста.
  
  2. Модифицируйте createPostCard(post) так, чтобы она принимала 
    объект post с данными для заполнения полей в карточке. Используя 
    createPostCard создать карточки для 3-х разных постов по данному 
    массиву объектов и повесить их в документ.
  
  3. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    строку с разметкой всех постов.
  
  4. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
const posts = [{
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
];

const galleryItems = [{
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt : "alttext1",
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt : "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt : "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt : "alt text 4"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/fullview-5.jpeg",
    alt : "alt text 5"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/fullview-6.jpeg",
    alt : "alt text 6"
  }
];


// console.log(posts);

const post = document.querySelector(".preview");
console.log(post);

//закоомментировать для обычного добавления
const markup = createPostCardLineInner(galleryItems);
console.log(galleryItems);
post.innerHTML = markup;

// function createPostCardLine();

function createCards(arr) {
  return (res = arr.reduce((acc, el) => acc.concat(createPostCard(el)), []));
  // const elements = [];
  // arr.forEach(note => {
  //   const el = createPostCard(note);
  //   elements.push(el);
  // });
  // return elements;
}


// Задание 1 .....возвращала строку с тегами, которую потом можно будет поставить в документ
//  используя innerHTML или insertAdjacentHTML

function createPostCardLineInner(arr) {
  return arr.reduce((acc, obj) => acc + createPostCardLine(obj), "");

  // let markup = '';
  // arr.forEach (note => {
  //   const html = createPostCardLine(note);
  //   markup += html;
  // });
  // // console.log(markup);
  // return markup;
}

function createPostCardLine({li}) {
  return `
  <ul class="preview">
   
    <li><img src="${preview}" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
      <li><img src="${preview}" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
      <li><img src="${preview}" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
  
  </ul>
</div> 
  `;
}