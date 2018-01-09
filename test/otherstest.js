//检测客户端电脑版本
document.getElementById("clientversion").textContent = navigator.appVersion;

//函数没有this，对象才有,函数里面的this是它上层的对象，如果它的上层也不是对象那么this就是指向当前的这个文档
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

console.log(object.getNameFun()());


/*{
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

    console.log(object.getNameFun()());
}*/