const fullImgBox = document.getElementById("fullImgBox");
const miniImg = document.querySelectorAll(".img-bt");
const fullImg = document.getElementById("fullImg");

for(let i = 0; i < miniImg.length; i++){
    miniImg[i].addEventListener('click', function(){
        fullImgBox.style.display = "flex";
        fullImg.src = "images/pic" + (i+1).toString() + ".jpeg";

    })
};

function closeFullImg(){
    fullImgBox.style.display = "none";
};

