{
    //对象不能遍历
    let obj = {
        name: "ahao",
        age: 18
    };

    let resObj = {};
    //Map的数组初始化方法
    let iterMap = new Map([['name', 'ahao'], ['age', 18]]);
    //iterMap.set("name", "ahao");
    //iterMap.set("age", 18);
    for(let [key, value] of iterMap) {
        console.log(key, value);
        resObj[key] = value;
    }

    let iter = iterMap[Symbol.iterator]();
    let inext = iter.next();
    while(!inext.done) {
        console.log(inext.value);
        inext = iter.next();
    }
}

/**
*遍历dom对象
*/
{
    let resObj = {};
    let lilist = document.querySelectorAll("ul li");
    for(let li of lilist) {
        //resObj[li.id] = li.textContent;
    }
    let $lilist = $("li");
    for(let li of $lilist) {
        resObj[li.id] = li.textContent;
    }
    document.getElementById("result").textContent = JSON.stringify(resObj);
}
