//every方法,将不会计算索引值为1的元素
{
    let arr = [1, , 32, 54, 5, 2];
    let aha = arr.every(function(e, i, o) {
        return e < 100;
    });
    //console.log(aha);
}

{
    let [...spread]= [12, 5, 8, 130, 44];
    console.log(spread);
}