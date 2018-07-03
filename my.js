

const galleryItems = [
  {
    img: 'img/image-1.jpeg',
    preview: 'img/preview-1.jpeg',
    fullview: 'img/fullview-1.jpeg',
    alt: 'alt text 1',
  },
  {
    img: 'img/image-2.jpeg',
    preview: 'img/preview-2.jpeg',
    fullview: 'img/fullview-2.jpeg',
    alt: 'alt text 2',
  },
  {
    img: 'img/image-3.jpeg',
    preview: 'img/preview-3.jpeg',
    fullview: 'img/fullview-3.jpeg',
    alt: 'alt text 3',
  },
  {
    img: 'img/image-4.jpeg',
    preview: 'img/preview-4.jpeg',
    fullview: 'img/fullview-4.jpeg',
    alt: 'alt text 4',
  },
  {
    img: 'img/image-5.jpeg',
    preview: 'img/preview-5.jpeg',
    fullview: 'img/fullview-5.jpeg',
    alt: 'alt text 5',
  },
  {
    img: 'img/image-6.jpeg',
    preview: 'img/preview-6.jpeg',
    fullview: 'img/fullview-6.jpeg',
    alt: 'alt text 6',
  },
];



const gallery = document.querySelector(".preview");

const markup = createPostCardLineInner(galleryItems);
gallery.innerHTML = markup;


function createCards(arr) {
  return (res = arr.reduce((acc, el) => acc.concat(createPostCard(el)), []));
}

function createPostCardLineInner(arr) {
  return arr.reduce((acc, obj) => acc + createPostCardLine(obj), "");
}

function createPostCardLine({img, fullview, alt}) {
  return `
  <div class="post">
  <ul class="preview">
  <li><img src='${img}' data-fullview='${fullview}' alt='${alt}'></li>
  </ul>
</div>
  `;
}


let	minImg = document.querySelectorAll('.preview');
document.onclick =function(event){
if(event.target.tagName == 'IMG'){
  changeImg(event.target);
  // console.log(event.target.src);
  // console.log(event.data-fullview);
	}
}
document.querySelector('.fuul').src = galleryItems[0].fullview;

function changeImg(target){
  console.log(target);

  document.querySelector('.fuul').src = target.src;
  document.querySelector('.fuul').alt = target.alt;
  document.querySelector('.fuul').data_fullview = target.fullview;
}
