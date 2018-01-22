//检测客户端电脑版本
document.getElementById("clientversion").textContent = navigator.appVersion;

//this总是指向调用它的对象，如果它的上层也不是对象那么this就是指向当前的这个文档
//但是不能使用let申明name，因为使用let申明的变量不会被作为顶层变量
var name = "the window";

var object = {
    name: "my object",
    getNameFun: function() {
        return function(){
            return this.name;
        };
    }
};

//console.log(object.getNameFun()());


{
    let name = "the window";

    let object = {
        name: "my object",
        getNameFun: function() {
            let that = this;
            return function(){
                return that.name;
            };
        }
    };

    //console.log(object.getNameFun()());
}

{
    var numbers = [5, 6, 2, 3, 7];
    //console.log(Math.max.apply(null, numbers));
    //console.log(Math.max(...numbers));
    //console.log(Math.min.apply(null, numbers));
}

{
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.canTalk = function() {
            console.log("--***Hi, Im %s, Im %s", name, age);
        }
    }
    
    function ahao(name, age) {
        //Person.call(this, name, age);
        let arr = [name, age]
        Person.apply(this, arr);
    }
    
    let aaa = new ahao("ahao", 18);
    //aaa.canTalk();
}

{
    [].forEach.call($("*"), function (a) {
        a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    });
}

{
    var elems = document.getElementsByTagName('p');
    for(var i = 0;i < elems.length; i++ ) {
        elems[i].addEventListener('click',function(e){
            e.preventDefault();
            alert('I am link #' + i)
        },false);
    }
}