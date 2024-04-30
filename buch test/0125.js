let pages;
let last_action;
let current_page = 0;
const max_pages = 99;

window.onload = function setup() {
  pages = document.getElementsByClassName("f0122-page");
  for (i=0; i < pages.length-1; i++) {
    let page = pages[i];
    if (page.classList.contains("f0122-flipped")) {
      page.classList.remove("f0122-flipped");
    }
    page.style.zIndex = 0 - i;
  }
}

function next_page() {
  flip_page();
}

function prev_page() {
  flip_page(unflip=true);
}

function flip_page(unflip=false) {
  let page;
  if (unflip == true) {
    if (current_page >= 1) {
      page = pages[current_page-1];
      page.classList.remove("f0122-flipped");
      current_page--;
      last_action = "unflip";
    }
    
  } else {
    if (current_page < pages.length-1) {
      page = pages[current_page];
      page.classList.add("f0122-flipped");
      current_page++;
      last_action = "flip";
    }
  }
  setTimeout(set_zindex, 1000);
}

function set_zindex() {
  let page;
  if (last_action == "unflip") {
    page = pages[current_page];
  } else {
    page = pages[current_page-1];
  }
  if (page.classList.contains("f0122-flipped")) {
    page.style.zIndex = current_page - 1;
  } else {
    page.style.zIndex = 0 - current_page;
  }
}