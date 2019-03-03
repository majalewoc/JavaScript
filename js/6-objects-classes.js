class Person {
    constructor(firstName, name, gender, age) {
        this.firstName = firstName;
        this.lastName = name;
        this.gender = gender;
        this.age = age;
    }

    display () {
        console.log (`First name: ${this.firstName}, Last name: ${this.lastName}, Surname: ${this.surname}`);
    }

}

let kuba =new Person ('Jacob', 'Dulny', 'Man', '28');
kuba.surname= 'Andrew';
kuba.whatIsSurname = () => {
    return kuba.surname;
}

console.log(kuba.whatIsSurname());

let maja =new Person ('Majs', 'Lewoc', 'Woman', '26');

kuba.display();
maja.display();