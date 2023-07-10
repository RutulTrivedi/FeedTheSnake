left = 180;
rightInt = 0;
leftInt = 0;

topPos = 180;
topInt = 0;
bottomInt = 0;

f = document.getElementById('food');
image = document.getElementById('snakeImage');
score = document.getElementById('idScore');
yourScore = 0;
count = 0;
defaultSpeed = 3;
totalLife = 7;

foodItem = [
    "Images/apple.png",
    "Images/banana.png",
    "Images/grapes.png",
    "Images/strawberry.png",
    "Images/watermelon.png"
]

function startLeft() {
    clearInterval(rightInt);
    clearInterval(leftInt);
    clearInterval(topInt);
    clearInterval(bottomInt);
    leftInt = setInterval(moveLeft, defaultSpeed);
}

function startRight() {
    clearInterval(rightInt);
    clearInterval(leftInt);
    clearInterval(topInt);
    clearInterval(bottomInt);
    rightInt = setInterval(moveRight, defaultSpeed);
}

function startTop() {
    clearInterval(rightInt);
    clearInterval(leftInt);
    clearInterval(topInt);
    clearInterval(bottomInt);
    topInt = setInterval(moveTop, defaultSpeed);
}

function startBottom() {
    clearInterval(rightInt);
    clearInterval(leftInt);
    clearInterval(topInt);
    clearInterval(bottomInt);
    bottomInt = setInterval(moveBottom, defaultSpeed);
}

function moveRight() {
    left++;
    if (left > 1250) {
        left = 180;
        totalLife--;
        snakeLife();
    }
    checkOverlapping();
    image.src = "Images/snakeRight.png";
    image.style.width = "100px";
    image.style.height = "70px";
    image.style.left = left + "px";
}

function moveLeft() {
    left--;
    if (left < 180) {
        left = 1250;
        totalLife--;
        snakeLife();
    }
    checkOverlapping();
    image.src = "Images/snakeLeft.png";
    image.style.width = "100px";
    image.style.height = "70px";
    image.style.left = left + "px";
}

function moveTop() {
    topPos--;
    if (topPos < 160) {
        topPos = 420;
        totalLife--;
        snakeLife();
    }
    checkOverlapping();
    image.src = "Images/snakeTop.png";
    image.style.height = "100px";
    image.style.width = "70px";
    image.style.top = topPos + "px";
}

function moveBottom() {
    topPos++;
    if (topPos > 420) {
        topPos = 160;
        totalLife--;
        snakeLife();
    }
    checkOverlapping();
    image.src = "Images/snakeDown.png";
    image.style.height = "100px";
    image.style.width = "70px";
    image.style.top = topPos + "px";
}

function changeFoodPos() {
    foodX = Math.ceil(Math.random() * (1000 - 340 + 1) + 340);
    foodY = Math.ceil(Math.random() * (400 - 200 + 1) + 200);
    selectFood = Math.floor(Math.random() * 5);
    document.getElementById('foodImage').src = "" + foodItem[selectFood] + "";
    f.style.top = foodY + "px";
    f.style.left = foodX + "px";
}

function checkOverlapping() {
    if ((topPos < foodY && topPos + 70 > foodY && left < foodX && left + 100 > foodX) || (topPos < foodY + 40 && topPos + 70 > foodY + 40 && left < foodX + 30 && left + 100 > foodX + 30)) {
        changeFoodPos();
        yourScore++;
        if (yourScore > 15) {
            defaultSpeed--;
        }
        else if (yourScore > 30) {
            defaultSpeed--;
        }
        score.innerHTML = "Your Score : " + yourScore;
    }
}

function snakeLife(){
    sLife = document.getElementById('lifeLine');
    if(totalLife == 6){
        sLife.innerHTML = '<img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">'
    }
    else if(totalLife == 5){
        sLife.innerHTML = '<img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">'
    }
    else if(totalLife == 4){
        sLife.innerHTML = '<img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">'
    }
    else if(totalLife == 3){
        sLife.innerHTML = '<img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">'
    }
    else if(totalLife == 2){
        sLife.innerHTML = '<img src="Images/heart.svg" alt="">     <img src="Images/heart.svg" alt="">'
    }
    else if(totalLife == 1){
        sLife.innerHTML = '<img src="Images/heart.svg" alt="">'
    }
    else if(totalLife == 0){
        Swal.fire({
            title: 'Game Over!',
            icon: 'error',
            cancelButtonColor: '#d33',
            confirmButtonText: '<a href="gamepage.html" class="text-white" style="text-decoration-line:none;">Yes</a>',
            html: `You scored `+yourScore+`<br><br><a href="index.html" style="color:red;text-decoration-line:none;">No</a>`
        })
        document.getElementById('idBody').style.backgroundColor = '#76c51c'
        document.getElementById('idBody').style.backgroundImage = 'None'
        document.getElementById('head').remove();
        image.remove();
        f.remove();
        sLife.innerHTML = ''
        clearInterval(rightInt);
        clearInterval(leftInt);
        clearInterval(topInt);
        clearInterval(bottomInt);
    }
}

document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:
            startLeft();
            break;
        case 38:
            startTop();
            break;
        case 39:
            startRight();
            break;
        case 40:
            startBottom();
            break;
    }
};