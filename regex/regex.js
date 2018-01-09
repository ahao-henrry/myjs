/**
    2018-01-02 22:47:38 ahao 正则表达式相关的知识
    \:转义
    $:匹配末尾
    ^:匹配开头
    *:匹配前面的表达式0次或者多次,同{0,}
    +:匹配前面的表达式1次或者多次,同{1,}
    ?:匹配前面的表达式0次或者1次,同{0,1}
    .:匹配除换行符之外的任何单个字符
    (x):捕获括号
    (?:x):非捕获括号
    x(?=y):正向肯定查找,匹配x,仅当后面跟着y的时候,但是不匹配y
    x(?!y):正向否定查找,匹配x,仅当后面不跟着y的时候,但是不匹配y
    x|y:或匹配
    {n}:匹配前面一个字符刚好发生了n次
    {n,m}:匹配前面的字符至少n次，最多m次
    [xyz]:匹配方括号的中任意字符，包括转义序列,不必转义
    [^xyz]:匹配任何没有包含在方括号中的字符
    \d:匹配一个数字,同[0-9]
    \D:匹配一个非数字字符,同[^0-9]
    \s:匹配一个空白字符，包括空格、制表符、换页符和换行符
    \S:匹配一个非空白字符
    \w:匹配一个单字字符(字母、数字或者下划线)
    \W:匹配一个非单字字符
*/

{
    var myRe = /d(b+)d/g;
    var myArray = myRe.exec("cdbbdbsbzdbdsd");
    console.log(myArray[0]);
}