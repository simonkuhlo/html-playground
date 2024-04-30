let pages = document.getElementsByClassName("f0122-page");
let current_page = 0;
const max_pages = 99;


function next_page() {
  flip_page_2();
}

function prev_page() {
  unflip_page();
}

function flip_page_2() {
    if (current_page < pages.length-1) {
        let page = pages[current_page];
        page.classList.add("f0122-flipped");
        current_page++;
    }
    console.log(current_page)
}
function unflip_page() {
    if (current_page >= 1) {
        let page = pages[current_page-1];
        page.classList.remove("f0122-flipped");
        current_page--;
    }
    console.log(current_page)
}

function flip_page(page_number, animation) {
  let page_to_flip = document.getElementById(`f012-page${page_number}`);
  let computedStyle = window.getComputedStyle(page_to_flip);
  let animation_duration = computedStyle.animationDuration;
  let z_index = computedStyle.zIndex;
  z_index = parseInt(z_index);
  let animation_duration_ms = parseFloat(animation_duration) * 1000;
  let halfway_point = animation_duration_ms / 2;
  page_to_flip.style.animationName = animation;
  setTimeout(() => {
    page_to_flip.style.zIndex = 0 - z_index;
  }, halfway_point);
  
} 

function move_book(next_page) {
  if (next_page < 2){
    book = document.getElementById(`book`);
    let computedStyle_book = window.getComputedStyle(book);
    let width = parseFloat(computedStyle_book.width);
    let move_value = width / 2;
    if(current_page == 0 && next_page == 1){
      book.style.transform = `translateX(${move_value}px)`;
    } else if (current_page == 1 && next_page == 0){
      book.style.transform = `translateX(-${move_value}px)`;
    }
  } 
}