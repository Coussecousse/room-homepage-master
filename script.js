// MENU


menu = document.querySelector('.nav_menu');


menu.addEventListener("click", () => {
    img = menu.querySelector("img");
    list = document.querySelector(".menu_list");
    menuOpen = document.querySelector(".menu_open");

    if (img.alt == "Open") {
        img.alt = "Close";
        img.src = "./images/icon-close.svg";

        list.classList.remove('hidden');
        list.classList.remove('translate-x-negative-full');
        menuOpen.classList.remove("translate-x-negative-full");


    } else {
        img.alt = "Open";
        img.src = "./images/icon-hamburger.svg";

        list.classList.add('translate-x-negative-full');
        menuOpen.classList.add("translate-x-negative-full");

    }
})

// ARROWS

arrows = document.querySelectorAll(".arrow");
carousel = document.querySelector(".carousel");
console.log(arrows);

arrows.forEach(arrow => { 
    arrow.addEventListener("click", () => {
        screenWidth = window.innerWidth;
        if (arrow.id === "right") {
            for (const child of carousel.children){
                if (child.classList.contains('active')){
                    console.log(child)
                    switch(child.id) {
                        case "div-1":
                            for (const childMove of carousel.children) {
                                childMove.classList.contains('move') ? childMove.style.transform = "translateX(-"+screenWidth+"px)" : null;
                            }
                            child.classList.remove("active");
                            child.nextElementSibling.classList.add("active");
                            break;
                        case "div-2" : 
                            for (const childMove of carousel.children) {
                                childMove.classList.contains('move') ? childMove.style.transform = "translateX(-"+(screenWidth*2)+"px)" : null;
                            }
                            child.classList.remove("active");
                            child.nextElementSibling.classList.add("active");
                            break;
                        default : 
                        for (const childMove of carousel.children) {
                            childMove.classList.contains('move') ? childMove.style.transform = "translateX(0)" : null;
                        }
                        child.classList.remove("active");
                        carousel.children[1].classList.add("active");
                        break;
                    }
                    break;
                }
            } 

        } else {
            for (const child of carousel.children){
                if (child.classList.contains('active')){
                    console.log(child)
                    switch(child.id) {
                        case "div-2" : 
                            for (const childMove of carousel.children) {
                                childMove.classList.contains('move') ? childMove.style.transform = "translateX(0)" : null;
                            }
                            child.classList.remove("active");
                            child.previousElementSibling.classList.add("active");
                            break;
                        case "div-3":
                            for (const childMove of carousel.children) {
                                childMove.classList.contains('move') ? childMove.style.transform = "translateX(-"+screenWidth+"px)" : null;
                            }
                            child.classList.remove("active");
                            child.previousElementSibling.classList.add("active");
                            break;
                        default : 
                            for (const childMove of carousel.children) {
                                childMove.classList.contains('move') ? childMove.style.transform = "translateX(-"+(screenWidth*2)+"px)" : null;
                            }
                            child.classList.remove("active");
                            carousel.lastElementChild.classList.add("active");
                            break;
                    }
                    break;
                }
        }
        }
    })
    
});

