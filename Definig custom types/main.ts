// Challenge: finish the object type definition
// Challenge: try to figure out how to move the nested address object type
// into a separate type definition. When done correctly, there should be no more
// red errors in the editor

type Address ={
    city:String,
    state:String,
    coutry:String
}
type Person = {
    name: string,
    age:number,
    isStudent:boolean,
    address?:Address

}

let person1:Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address:{city:'Karachi',state:'sindh',coutry:'Pakistann'}
}

let person2:Person = {
    name: "Jill", 
    age: 66,
    isStudent: false,
    address:{city:'Karachi',state:'sindh',coutry:'Pakistann'}

}