console.log("konichiwa")
let x: string = "keri vaada makkale...!"
x+=" alle venda avde ninno"
console.log(x)
const y: number  = 10.99
console.warn("number type:",y)
var z:boolean = true
console.error("boolean type:",z)
let a: any
a="da kocherukka"
console.warn(typeof a)
a=102028232743659270356049163579426576405816027340569736405203795
console.warn(typeof a)
let b: string|number|Date
b="uhuhuh"
console.warn(typeof b)
let data: number[] = [0,1,2,3,4,5,6,7,8,9];
data.push(60)
console.log(data,data.length)
data.forEach(num=>console.log(num))
let data1:any[] = ["veg",12.33,10,true]
console.log(data1,data1.length)
console.log(data1.join("<->"))

function print1(p:number,q:number){
    return p*q
}
function print2(p,q): number{
    return p*q
}
function print3(p,q?): number{
    if(q==undefined)
        return p;
    return p*q
}
console.log(print1(1,2)+print2(3,4))
console.log(print3(1))
console.log(print3(1,2))

class product{
    private pid:number
    private desc:string
    private price:number
    constructor(pid: number,desc:string,price:number){
        this.pid=pid
        this.desc=desc
        this.price=price
    }
    public setpid(p:number){
        this.pid = p
    }
    public getpid(){
        return this.pid;
    }
    public printall(){
        return this.pid+this.desc+this.price
    }
}
let p = new product(1,"jithin",200)
console.log(p.getpid())
console.log(p.printall())