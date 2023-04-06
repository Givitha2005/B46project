
var operation = {
    a : 10,
    b : 20,
    add:function(){
        console.log(this.a+this.b);
        console.log(`a = ${this.a}, b = ${this.b}`);
        var that = this;
        // var print = () => {
            var print = function()  {

            // console.log(`a = ${this.a}, b = ${this.b}`);
            console.log(`a = ${that.a}, b = ${that.b}`);

        }
        print();
    }
}
operation.add();


var employee = {
    name:"Givtha",
    sum : function(){
        console.log("First Outer: "+this.name);
        var print = () => {
            console.log("First Inner: "+this.name); 
        }
        print();
    }
}
employee.sum();


var person = {
    name:"Givtha",
    get : function(){
        console.log("Outer: "+this.name);
        var print = function () {
            console.log("Inner: "+this.name); 
        }.bind(this);//bind
        print();
    }
}
person.get();