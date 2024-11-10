//access the buttons,image and slider
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

//count no. of slides
let slideNumber = 1;
//store total number of images 
let length = images.length;


// access bottom div, made above slider part to make sure the button also get updated while we use side buttons 
const bottom = document.querySelector(".bottom");
// create buttons dynamically according to length of image object, to keep the count of number of images
for(let i =0; i<length; i++){ //creation of element i to be used later when passed in button func
    const div = document.createElement("div"); // creating new element named as div and stored in div
    div.className = "button"; // naming the divs as class button
    bottom.appendChild(div);  // appending div inside bottom
};

// accessing all buttons created above
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "black"; // setting the first button style 

// func to make button transparent, called when we shift to new button so that prev button become transparent
const resetBg = ()=>{
    buttons.forEach((button) =>{
        button.style.backgroundColor = "transparent";
        // adding slideshow on each button, func declared below, added here to prevent creating new function for slideshow task
        button.addEventListener("mouseover",stopSlideShow);
        button.addEventListener("mouseout",startSlideShow);
    });
};

//adding eventlistener on each button via foreach loop and creating func to change images when clicked
buttons.forEach((button,i)=>{ //parameters -button and i 
    button.addEventListener("click",()=>{
        slider.style.transform = `translateX(-${i*100}%)`  //translateX- to shift the images along X-axis,- to shift it from right to left,i*100% to shift the slide by one entire image
        resetBg();//calling reset button func
        slideNumber = i+1; //increasing the count of slidenum by 1 more than i
        button.style.backgroundColor = "black"; //setting the current button style
    });
});

// changecolor function to reset button style and add styling to current button
const changeColor = ()=>{
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = "black";
}

// func to change next slide while using right arrow button
const nextSlide = () =>{
    slider.style.transform = `translateX(-${slideNumber*100}%)`; //translateX- to shift the images along X-axis,- to shift it from right to left,i*100% to shift the slide by one entire image
    slideNumber++; 
};

// func to change previous slide while using left arrow button
const prevSlide = () =>{
    slider.style.transform = `translateX(-${(slideNumber-2)*100}%)`; // slidenumber- 2 is used to count two images current and next one
    slideNumber--;
};

//looping the first image with right button
const firstSlide = () =>{
    slider.style.transform = `translateX(0%)`;
    slideNumber = 1;
};

//looping last image with left button
const lastSlide = () =>{
    slider.style.transform = `translateX(-${(length-1)*100}%)`;
    slideNumber = length;
};

//adding event listener to right button
right.addEventListener("click", ()=>{
    slideNumber < length ? nextSlide() : firstSlide();  // condition to move slides
    changeColor();  // calling change color func to change bottons css while using side arrow button
});

//ading event listener to left button
left.addEventListener("click", ()=>{
    slideNumber > 1 ? prevSlide() : lastSlide();  // cond to move slides
    changeColor(); // calling change color func to change bottons css while using side arrow button
});

// start auto slider

let slideInterval; // declaring variable

// function to start slideshow
const startSlideShow = ()=>{
    slideInterval = setInterval(()=>{  // setinterval method to change slide 
        slideNumber < length ? nextSlide() : firstSlide(); // condtion same as right button cond to start slideshow from right to left
        changeColor(); // changecolor function called to change chagne button style along with auto slide show
    },3000); // time interval 3sec
};

// func to stop slide show when move hover over slider,side arrow button and lower buttons
const stopSlideShow = ()=>{
    clearInterval(slideInterval); // method to clear slide interval
};
startSlideShow(); // calling slide show func to start automatically as soon as page load

//adding slideshow start stop on slider and left and rightbutton
slider.addEventListener("mouseover",stopSlideShow);
slider.addEventListener("mouseout",startSlideShow);
right.addEventListener("mouseover",stopSlideShow);
right.addEventListener("mouseout",startSlideShow);
left.addEventListener("mouseover",stopSlideShow);
left.addEventListener("mouseout",startSlideShow);