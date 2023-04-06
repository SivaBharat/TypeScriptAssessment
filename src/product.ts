interface Api{
    id:number;
    pname:string;
    pdescription:string;
    price:number;
}
function Api():Promise<Api[]>{
    return fetch('/product.json')
    .then(res=>res.json())
    .then(res=>{return res as Api[]})

}

Api()
.then(pro=>{
    console.log(pro.map(u => 'id:'+u.id+ '\n' +'ProductName:' +u.pname + '\n' +'ProductDescription'+ u.pdescription+ '\n'+'Price' + u.price + '\n'+ '\n').toString())
})



