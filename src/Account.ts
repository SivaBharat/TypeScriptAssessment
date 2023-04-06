interface saving{
  balance(balance:number):void;
  
}
interface current{
   balance(balance:number):void;
}
class account implements saving,current{
   id:number;
   name:string;
   withdraw:number;
   account_type:string;
   constructor(id:number,name:string,withdraw:number,account_type:string){
       this.id=id;
       this.name=name;
       this.withdraw=withdraw;
       this.account_type=account_type;

   }
   balance(balance:number):void{
       console.log('Account num is '+this.id);
       console.log('Customer name is '+this.name);      
       console.log('Your account type is '+this.account_type);
       var bal=(balance-this.withdraw);
       if(bal>0){
        console.log('your balance amount is '+bal);
       }
       else{
        console.log('Your balance amount is lesser than your withdraw amount');
       }
       
   }
}
let b=new account (101,'siva',2000,'savings');
b.balance(45000);