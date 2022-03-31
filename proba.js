/* let a = prompt("Unesi array s [ ]");
let A_list = a.split(",");
function solution (x) {
    let smallest
    if (Math.max(x)<0) {

    }
} */

let romans = {M:0,D:0,C:0,L:0,X:0,V:0,I:0};
let roman_letters = ["M","D","C","L","X","V","I"];

// console.log(romans.M);

let proba = "MMXLIX";
for (let numbr of roman_letters) {              // for (let i OF array) ako zelimo vrijednosti loopati
    for (let i = 0;i<(proba.length);i++) {
        if (proba[i]===numbr) {
            romans[numbr]= romans[numbr]+1;
        };
    };
};   // above loop counts each letter occurence

let c_4_9 = 0;    // *(-2)
let c_40_90 = 0;  // *(-20)
let c_400_900 = 0; // *(-200)
for (let x = 0;x<proba.length-1;x++) {
    if (proba[x]==="I"&&(proba[x+1]==="V"||proba[x+1]==="X")) {
        c_4_9+=1;
    };
    if (proba[x]==="X"&&(proba[x+1]==="L"||proba[x+1]==="C")) {
        c_40_90+=1;
    };
    if (proba[x]==="C"&&(proba[x+1]==="D"||proba[x+1]==="M")) {
        c_400_900+=1;
    };
};

let year = 1000*romans.M + 500*romans.D + 100*romans.C + 50*romans.L 
+ 10*romans.X + 5*romans.V + 1*romans.I - 2*c_4_9 - 20*c_40_90 - 200*c_400_900;

console.log(year);

let proba_split = proba.split("");
console.log(proba_split);
