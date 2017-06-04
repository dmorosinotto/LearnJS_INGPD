//default parameter
function f(x=0,y=0) {  
  console.log(x,y);
}

//destructuring parameter
function g({a, b}) {
  console.log(`a=${a},b=${b}`);
}

//destructuring + default parameter
function d({x, y = 100, color: [r = 1, g = 2, b = 3] = []} = {}){
  console.log(x,y, "#" + r.toString(16) + g.toString(16) + b.toString(16));      
}


//unit test f
f(1,2);			//1 2
f(3);			//3 0
f();			//0 0
f(null,4);		//null 4
f(undefined,5);	//0 5

//unit test g	
g({a: 2, b: 1});	//2 1
g({a:3});			//3 undefined
g({});				//undefined undefined
g({b:4});			//undefined 4
g({b:6, a:5, c:7}); //5 6

//unit test d
d({x: 10, y: 20, color: [30,40,50]});	//10 20 #1e2832
d();									//100 #123
d({color: [255,,255], z: 80 });			//100 #ff2ff