/* // bài 1:
let str ="program";
let hi=""
for(let i=str.length-1; i>=0; i--){
    hi=hi+str[i];
}
console.log(hi); */

// ...............................

/* // bài 2:
let str ="hello rikkei academy"
let truong = "";
truong = truong + str[0].toUpperCase();
for(let i =1; i<str.length;i++){
    if(str[i] ===" "){
        truong = truong + str[i] + str[i+1].toUpperCase();
        i++;
    }
    else{
        truong = truong + str[i];
    }
}
console.log(truong); */

// ............................

/* // bài 3:
let baby =[1,6,8,9,3,1,3,6,8,7];
for(let i=0; i<baby.length; i++){
    for(let j=i+1; j<baby.length;j++){
        if(baby[i]===baby[j]){
            baby.splice(j,1);
            j=j-1;
        }
    }
}
console.log(baby);
 */
// ........................

/* // bài 4:
let you =[3,8,5,9,1,6];
for(let i =0; i<you.length;i++){
    for(let j =i+1; j<you.length;j++){
        if(you[i] > you[j]){
            let a;
            a=you[i];
            you[i]=you[j];
            you[j]=a;

        }
    }
}
console.log(you); */

// .........................