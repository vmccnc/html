function HouseKeeper (name, age ){
    this.name = name ;
    this.age = age;
    this.clean = function(){
        alert('I cliand...')
    }
}


var keepper1 = new HouseKeeper('Kate', 21);