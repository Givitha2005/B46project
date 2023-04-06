let menuList = [5,10,15];
let day = " ";
let newMenu = menuList.map(function(items){
    if(day == "Saturday"){
        return items * 5;
    }else if(day == "Friday"){
        return items * 10;
    }else {
        return items * 1;
    }
});
console.log(newMenu);