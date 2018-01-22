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
    //console.log(spread);
}

//chrome 和 Firefox还未实现array.values()这个方法需要用其他代替
{
    let arr = [1, 3, 2, 43, 5, 10];
    for(let i of arr.keys()) {
        //console.log("--****key is " + i);
    }
    for(let i of arr[Symbol.iterator]()) {
        //console.log("--****value is " + i);
    }
    for(let [key, value] of arr.entries()) {
        //console.log("--****key is " + key + " value is " + value);
    }
}

{
    let arr = [1, 3, 2, 43, 5, 10];
    let arr1 = [6, 7];
    //arr.push(arr1);
    //arr.push(...arr1);
    Array.prototype.push.apply(arr, arr1);
    //console.log(arr);
}

{
    var obj = {
        length: 0,

        addElem: function addElem (elem) {
            [].push.call(this, elem);
        }
    };

    obj.addElem({});
    obj.addElem({});
    //console.log(obj);
}

{
    var total = [4, 1, 2, 3].reduce(function(sum, value) {
      return sum + value;
    }, 1);
}

{
    let arr = [[0, 1], [2, 3], [4, 5]];
    //let arr1 = arr.reduce((acc, cur) => acc.concat(cur), []);
    let arr1 = arr.reduce((acc, cur) => [...acc, ...cur], []);
    //console.log(arr1);
}

{
    var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    var countedNames = names.reduce(function (allNames, name) { 
      if (name in allNames) {
        allNames[name]++;
      }
      else {
        allNames[name] = 1;
      }
      return allNames;
    }, {});
}

{
    let map = new Map([["name", "ahao"], ["age", 18]]);
    //console.log(map);
    let arr = Array.from(map);
    //console.log(arr);
}

{
    //将一个字符串反转，主要思想就是将字符串转为数组使用数组的reverse方法
    let str = "ahao is aaaaaahao";
    //let arr = Array.from(str);
    let arr = [...str];
    //console.log(arr.reverse().join(""));
}


/////???????????????????????????????????????????
/////what the fuck,,,,,为什么不行呢，call和apply和我有仇？？？？？？？？？
{
    let ps = document.querySelectorAll(".ppp");
    //console.log(ps);
    Array.from(ps).shift();
    let psnew = Array.prototype.slice.call(ps);
    //console.log(psnew); 
    
    let set = new Set([1, 2, 3, 4]);
    function shift(set1) {
        return Array.prototype.shift.call(set1);
    }
    //console.log(shift(set));
    //console.log(set);
}

{
    //splice 3个参数：从哪里开始，删除多少个，插入什么
    let arr = [1, 3, 2, 44, 23, 423];
    let arr1 = ["ahao", 18];
    arr.splice(2, 2, ...arr1);
    console.log(arr);
}