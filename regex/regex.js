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
    //console.log(myArray[0]);
}
{
    function commafy(num){
  	  return num && num
  		.toString()
  		.replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2, $3){
  			return $2 + ',';
  		});
    }
    //console.log(commafy(1235634.11));
}

{
    let videoUrl = "rtsp://10.0.33.44:9000/umksmith5dr5:0:P2P_NPC:0:1:admin:admin/av_stream";
    console.log(videoUrl.replace(/\:(\d)\:(\d)\:/, function(match, $1, $2, offset, originstr) {
        return ":"+$1+":1:";
    }));
    console.log(videoUrl.replace(/\:(\d)\:(\d)\:/, ":$1:1:"));
    console.log(videoUrl.match(/\:\d\:(\d)\:/)[1]);
}

{
    function replacer(match, p1, p2, p3, offset, string) {
      // p1 is nondigits, p2 digits, and p3 non-alphanumerics
      return [p1, p2, p3].join(' - ');
    }
    var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    //console.log(newString);  // abc - 12345 - #$*%
}