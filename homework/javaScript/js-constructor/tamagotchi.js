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
        console.log(this.foodInTummy);
        console.log("WAHH!!!");
        return this;
    }

    puke() {
        this.foodInTummy --
        console.log(this.foodInTummy + " WAHH!!!! I'M SICK");
        return this;
    }

    yawn(){
        this.restedness --
        console.log(this.name + " has current restedness of: " + this.restedness);
        return this;
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



