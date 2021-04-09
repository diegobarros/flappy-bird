class Bird {

    constructor(skySelector) {

        this.skyElement = document.querySelector(skySelector);

        this.skyWidth = this.skyElement.clientWidth;
        this.skyHeight = this.skyElement.clientHeight;

        this.bird = document.createElement("div");
        this.bird.setAttribute("id", "bird-1");
        this.bird.setAttribute("class", "bird");
        this.skyElement.appendChild(this.bird);

        this.resetPosition();

    }


    resetPosition() {
        this.x = this.skyWidth / 4;
        this.y = this.skyHeight / 2;
        this.bird.style.left = this.x + "px";
        this.bird.style.top = this.y + "px"; 
    }


    jump() {

        console.log("pulando");

    }






}