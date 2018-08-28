//an array order matters in an object they do not becuase they will use keys. 
let myCar = new Object();{
    myCar.make = 'Ford';
    myCar.model = 'Mustang';
}

var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';
