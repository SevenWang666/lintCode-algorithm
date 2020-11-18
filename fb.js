var a=[];
a[0]=0;
a[1]=1;
var fib = function(N) {
    if(N===2||N===1) return 1
    if(a[N]) return a[N]
    a[N] = fib(N-1)+fib(N-1)
    return a[N]
}
console.log(fib(3))