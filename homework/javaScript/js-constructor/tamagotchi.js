console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
   constructor(name, creatureType) {
    this.name = name;
    this.creatureType = creatureType;

    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
}
    cry(){
        this.foodInTummy --
        console.log("WAHH! " + this.name + "'s food level is " + this.foodInTummy); 
       
        return this;
    }

    puke() {
        this.foodInTummy --
        console.log("WAHH! I'm sick and my food level is " + this.foodInTummy);

        return this;
    }

    yawn(){
        this.restedness --
        console.log(this.name + " has current restedness of: " + this.restedness);
        return this;
    }

    start () {
        let me = this;
        console.log("start" + this.name)
        this.hungerTimer = setInterval(function() {
            me.cry();
        }, 6000);
        this.yawnTimer = setInterval(function() {
            me.yawn();
        }, 10000);
        this.sickTimer = setInterval(function() {
            me.puke();
        }, 20000);
           
    }
    
    stop(){
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
        console.log("The timer for " + this.name + " has stopped.")
    }
}


//PART ONE - CREATE CONSTRUCTOR FUNCTION
//create new Tamagotchis
const tommy = new Tamagotchi();
const sam = new Tamagotchi();


// console.log(tommy.cry());
// console.log(sam.cry());

//PART TWO - ADD ARGUMENTS
const fluffykins = new Tamagotchi("fluffykins", "bunny");
const fido = new Tamagotchi("fido", "dog");
// console.log(fluffykins.cry());
// console.log(fido.cry());


//PART THREE - MORE METHODS
const olive = new Tamagotchi("olive", "dog");
const blue = new Tamagotchi("blue", "bird");
// console.log(olive.yawn());
// console.log(blue.puke());

//PART THREE with chained methods
// console.log(olive.puke().yawn());
// console.log(blue.puke().yawn());

//PART FIVE - START AND STOP
const yellow = new Tamagotchi("yellow", "iguana");
const pooh = new Tamagotchi("pooh", "bear");

console.log(yellow.cry());
console.log(pooh.yawn());
console.log(yellow.puke());


console.log(yellow.start());
console.log(blue.start());
// console.log(yellow.stop());
console.log(pooh.start());
// console.log(blue.stop());
// console.log(pooh.stop());