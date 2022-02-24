const pi = Math.PI

class Circle {

    constructor(radius) {
        this.radius = radius
    }


    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return pi * this.diameter
    }

    get area() {
        return pi * (this.radius * this.radius) 
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    } 

    set circumference(newCircumference) {
        this.radius = (newCircumference / Math.PI) /2
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea/pi) 
    }
}
    