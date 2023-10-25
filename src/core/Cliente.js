export default class Cliente{
    constructor(_name,_age,_id){
        this.id = _id
        this.name = _name
        this.age = _age
    }

    static vazio(){
        return new Cliente("",0)
    }

    get getId(){
        return this.id
    }

    get getName(){
        return this.name
    }

    get getAge(){
        return this.age
    }
}