temp2.textContent.split("\n").map(c=>{
    var a=c.split("").reduce(function (numString, element) {
       let nums = "0123456789";
       if (nums.includes(element)) {
          return numString + element;
       }
       return numString;
    },"").split("");
    let f = a[0];
    let l = a.pop();
    return Number(f+l);
}).slice(0, -1).reduce((a, b) => a + b, 0)
