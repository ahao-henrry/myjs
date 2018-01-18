{
    function normalfun(x) {
        console.log(x);
        let res = x ** 2;
        return res;
    }
    let nora = normalfun(5);
    console.log(nora);
}

{
    function* generator(x) {
        console.log(x);
        var res = yield x ** 2;
        var res1 = yield x * 2;
        return res;
    }
    let gen = generator(5);
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
}

{
    let jsondata = {};
    let resdata = {};

    function setdata() {
        setTimeout(function () {
            jsondata["name"] = "ahao";
            jsondata["age"] = 18;
        }, 200);
    }

    function getdata() {
        resdata = jsondata;
    }

    function printresdata() {
        console.log(resdata);
    }
    setdata();
    getdata();
    printresdata();
}

{
    function timeout(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    async function asyncPrint(value, ms) {
        await timeout(ms);
        console.log(value);
        await timeout(1000);
        console.log("hello, u");
    }

    asyncPrint('hello world', 2000);
}
