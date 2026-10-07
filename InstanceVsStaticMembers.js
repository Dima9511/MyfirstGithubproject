/*
We have Phones
-Iphone
-Samsung
*/

/*
     Instance member: Belong to each object and each object has its OWN COPY / Its own version
     -Instance variables
     -Instance method


     Static members: Belongs to Class and each object share the same info.
     Static variables
     Static method
*/

// Iphone
// Brand; Apple
// Model; Iphone -Iphone Mini, Pro, Iphone Dup
// MEmory - 226gb, 512gb, 1T
// hasCamera - true, false
// hasDupSim - true, false
// color
// screenSize

// Static block - helps to Initialize static verbals
//static {
    //this.brand = "Apple";


class Iphone {
    // Instance variables - each object has its own copy of these variable
    // Static variables - belongs to the class level and each object chares the same values
    static brand; 
    // The static variables belongs to the Class and ALL Objects shares the same values. It will be same for all objects.

  brand;  
  model;
  memory;
  hasCamera;
  hasDupSim;
  color;
  screenSize;
}
// Constractor - helps as to Inittialize the instanxce varibals
constructor (brand, model, memory, hasCamera, hasDuoSim, color, screenSize) {
    this.brand = brand;
    this.model = model;
    this.memory = memory;
    this.hasCamera = hasCamera;
    this.hasDuoSim = hasDuoSim;
    this.color = color;
    this.screenSize = screenSize;
}

let iphone1 = new Iphone("Apple", "Iphone Mini", 256, true, false, "white", 4.5);
let iphone2 = new Iphone("Apple", "Iphone Pro", 512, true, false, "black", 6.1);
let iphone3 = new Iphone("Apple", "Iphone Pro Nax", 1, true, false, "Orange", 6.9);


console.log(iphone1);
console.log(iphone2);
console.log(iphone3);



console.log("------------")
console.log(iphone1.model);
console.log(iphone2.model);



console.log("------------")
console.log(iphone1.brand);
console.log(iphone2.brand);




// Static variables help to the class level and 


    class Samsung extends Device {
      constructor (brand, model, memory, hasCamera, hasDuoSim, color, screenSize)
    super(brand, model, memory, hasCamera, hasDuoSim, color, screenSize)
