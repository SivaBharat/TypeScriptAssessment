abstract class Customer{
    public name:string;
   public age:number;
   public contact:number;
    public adress:string | number;
   
    public constructor(name:string,age:number,contact:number,adress:string | number){
        this.name=name;
        this.age=age;
        this.adress=adress;
        this.contact=contact;
    }
    abstract AccessDetails():void;

}
class loan extends Customer{
   public No:number;
   public Type:string;
 public Amount:number;
  public Duration:number;
public Interest:number;

 constructor(name:string,age:number,contact:number,adress:string | number,No:number, Type:string,Amount:number,Duration:number,Interest:number){
    super(name,age,contact,adress);
    this.No=No;
    this.Type=Type;
    this.Amount=Amount;
    this.Duration=Duration;
    this.Interest=Interest;
}
public AccessDetails(): void {
    
    console.log(this.name+this.age+this.contact+this.adress+this.No+this.Type+this.Amount+this.Duration+this.Interest)
}
public IntrestCalculation():void{
    console.log("Loan intrest amount :" +(this.Amount*this.Duration*this.Interest)/100)
}
display():void{
    console.log("customer Details:")
    this.AccessDetails();
    this.IntrestCalculation();
}
}
let x= new loan ("siva",22,7654433346,"siva,5-8",101,"personal",2000,21,3);
x.display();