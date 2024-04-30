let pages;
let animationduration = 2000;
let last_action;
let first_page;
let last_page;

let current_page = 0;

window.onload = function setup() {
  pages = document.getElementsByClassName("f0122-page");
  for (i=0; i < pages.length-1; i++) {
    let page = pages[i];
    if (page.classList.contains("f0122-flipped")) {
      page.classList.remove("f0122-flipped");
    }
    page.style.zIndex = 0 - i;
    if( i == 1){
      first_page = page;
    } else if ( i == pages.length-2) {
      last_page = page;
    }
  }
}

function next_page() {
  flip_page();
}

function prev_page() {
  flip_page(unflip=true);
}

function update_boxshadow_left(){
    let shadow_left = "";
    for (i=0; i < current_page; i++) {
      pixel_value1 = i;
      pixel_value2 = i+0,5;
      shadow_left = shadow_left + "0 "+pixel_value1+"px 0 white, 0 "+pixel_value2+"px 0 black";
      if (i < current_page - 1) {
        shadow_left = shadow_left + ",";
      }
    }
    first_page.style.boxShadow = shadow_left;
}
function update_boxshadow_right(){
  let shadow_right = "";
  let pages_right = pages.length - current_page
  for (i=0; i < pages_right; i++) {
    pixel_value1 = i;
    pixel_value2 = i+0,5;
    shadow_right = shadow_right + "0 "+pixel_value1+"px 0 white, 0 "+pixel_value2+"px 0 black";
    if (i < pages_right - 1) {
      shadow_right = shadow_right + ",";
    }
  }
  last_page.style.boxShadow = shadow_right;
}

function flip_page(unflip=false) {
  let page;
  if (unflip == true) {
    if (current_page >= 1) {
      page = pages[current_page-1];
      page.classList.remove("f0122-flipped");
      current_page--;
      last_action = "unflip";
      update_boxshadow_left();
      setTimeout(update_boxshadow_right, animationduration-100);
    }
    
  } else {
    if (current_page < pages.length-1) {
      page = pages[current_page];
      page.classList.add("f0122-flipped");
      current_page++;
      last_action = "flip";
      update_boxshadow_right();
      setTimeout(update_boxshadow_left, animationduration-100);
    }
  }
  setTimeout(set_zindex, animationduration/2);
}

function set_zindex() {
  console.log("test")
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