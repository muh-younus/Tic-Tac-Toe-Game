let box1 = document.querySelectorAll(".box");
let btn = document.querySelectorAll("#btn");



box1.forEach((boxes) => {

    boxes.addEventListener("click", () => {

        console.log("button click")
    
        boxes.innerText= "hello";

    });
    
});
