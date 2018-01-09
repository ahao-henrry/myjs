/**
*for...of 循环对于dom node一样适用,不必使用Array.from()转换
*/
{
    let ps = document.getElementsByTagName("p");
    let psArr = Array.from(ps);
    for(let p of ps) {
        console.log(p.id);
    }
    for(let p of psArr) {
        console.log(p.id);
    }
}

function foo() {
    var args = Array.from(arguments);
    console.log(args);
}
foo(1, 2, 3, 4); 

{
    let arr = Array.of();
    console.log(arr);
}

{
    console.log([1,,2,3,,4].reduce((x,y) => {return x+y}));
    console.log([,'a'].every(x => x==='a'));
}

{
    let arr = [, ,];
    console.log(arr.length);
    let arr1 = Array.of(arr);
    console.log(arr1);
    console.log(arr1.length);
    for (let i of arr) {
      console.log(1);
    }
}

{
    function f(x, y) {
      return {x, y};
    }
    console.log(f(1,2));
}

class Person {
    speak() {
        console.log("Hi, I can speak.");
    }
    
    walk() {
        console.log("Hi, I can walk.");
    }
}
{
    let person = new Person();
    person.speak();
    Object.assign(Person.prototype, {
        cantfly() {
            console.log("So sorry, I can't fly.");
        }
    });
    person.cantfly();
}


{
    let obj1 = {
        name: "ahao",
        age: 18
    };
    let obj2 = {
        sex: "m",
        addr: "GL"
    };
    let concatObj = (...args) => Object.assign({}, ...args);
    console.log(concatObj(obj1, obj2));
}

function getDesc(name, age, ...others) {
    let arrargs = Array.from(others);
    console.log("Hi, my name is " + name + " and I am " + age + " years old and " + arrargs[0] + "kg");
}
getDesc("ahao", 18, 60, 180);

{
    let array = [1, 2, 4, 4, 2, 65, 1];
    console.log([...new Set(array)]);
    console.log(Array.from(new Set(array)));

    let set = new Set([1, 2, 3, 4, 5]);
    set = new Set([...set].map(x => x * 2));
    console.log(set);
    let set1 = new Set([1, 2, 3, 4, 5]);
    set1 = new Set([...set1].filter(x => (x % 2) == 0));
    console.log(set1); 
}

//利用set实现数组去重和取出相同元素
{
    let arr1 = [1, 2, 4, 5, 23, 4];
    let arr2 = [1, 3, 4, 5, 25, 6];
    let union = [...new Set([...arr1, ...arr2])];
    console.log(union.sort());
    console.log(union.sort((a, b) => a-b));
    let intersect = [...new Set(arr1.filter(x => arr2.includes(x)))];
    console.log(intersect);
}

//map的生成和迭代
{
    let map1 = new Map([["name", "ahao"], ["age", 18], ["weight", 60]]);
    let map2 = new Map().set("name", "ahao1").set("age", 17).set("height", 180);
    console.log(map1);
    console.log(map2);
    function foo(map) {
        for(let key of map.keys()) {
            console.log(key);
        }
        for(let value of map.values()) {
            console.log(value);
        }
        for(let [key, value] of map.entries()) {
            console.log(key, ":", value);
        }
        for(let [key, value] of map) {
            console.log(key, ":", value);
        }
        for(let iterm of map) {
            console.log(iterm[0], ":", iterm[1]);
        }
    }
    foo(map1);
}

{
    var map = new Map().set("name", "ahao1").set("age", 17).set("height", 180);
    const reporter = {
      report: function(key, value) {
        console.log("Key: %s, Value: %s", key, value);
      }
    };

    map.forEach(function(value, key, map) {
      this.report(key, value);
    }, reporter);
}