// let personnage = {
//     identite: 'gencehan',
//     argent: '',
//     lieu: 'bruxelles',
//     mood: '',
//     changeMood(){
//         let mood = ['positif', 'negatif']
//         let random = Math.floor(Math.random()*mood.length)
//         let randomResult = mood[random]
//         return randomResult
//     }
// }

// let deplacement = () => {
//     personnage.lieu = 'Lieu de travail'
// }


// let makeMoney = () => {
//     let persoMood = personnage.changeMood()
//     console.log(persoMood);
//     if (persoMood == 'positif'){
//             for (let i = 0; i <= 8; i++) {
//                 str = personnage.argent + i
//                 console.log(str);
//             }
//         } else {
//             for (let i = 0; i <= 8; i++) {
//                 str = personnage.argent + i
//                 console.log(str);
//             }
//         }
// }
// console.log(makeMoney());

// let hours = 0;
// let money = 0;
// let secondes = 2;
// var myInterval = setInterval(() => {
//     hours++;
//     secondes = secondes + 2;
//     money++;
//     console.log(secondes, hours, money);
//     if (money == 15) {
//         clearInterval(myInterval);
//         console.log("done");
//     }
// }, 2000);


// setInterval(() => {

// },2000);








// class Personnage {
//     constructor(nom, prenom, age){
//         this.nom = nom
//         this.prenom = prenom
//         this.age = age
//     }
//     sePresenter(){
//         return `Hello, je suis ${this.prenom}`
//     }
// }

// let genc = new Personnage('genc', 'gurcan', 29) // instance

// console.log(genc);

// //--------

// class Belge extends Personnage{
//     constructor(name, prenom, age, origines, pays){
//     super(name, prenom, age);
//     this.origine = origine;
//     this.pays = [pays];
//     }
// }





class LeeGofGeek{
    constructor(id, power, damage, health, bonus){
    this.id = id
    this.power = power
    this.damage = damage
    this.health = health
    this.bonus = bonus
    }
    attaqueBasic = () => {
        if (this.attaqueBasic == true){
            let attack1 = perso1.health - perso2.damage
            console.log(`perso1 lance une attaque de ${perso1.damage}. perso2 lui reste ${attack1} de vie`);
        } else{
            let attack2 = perso2.health - perso1.damage
            console.log(`perso2 lance une attaque de ${perso2.damage}. perso1 lui reste ${attack2} de vie`);
        }
    }
    autoSave = () => {
        if (this.health < 15) {
            
        }
    }
    joker = () => {
        if (this.attaqueBasic == true){
            let attack1 = perso1.health - perso2.damage
            console.log(`perso1 lance une attaque de ${perso1.damage}. perso2 lui reste ${attack1} de vie`);
        } else{
            let attack2 = perso2.health - perso1.damage
            console.log(`perso2 lance une attaque de ${perso2.damage}. perso1 lui reste ${attack2} de vie`);
        }
    }
}

let perso1 = new LeeGofGeek("Billy", 1000, 15, 100, 10);
let perso2 = new LeeGofGeek("Fitcher", 1500, 15, 100, 10);

perso1.attaqueBasic()
perso2.attaqueBasic()


