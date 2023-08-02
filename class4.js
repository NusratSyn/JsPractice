/* Code for grading system with arrow function starts. */

let totalNum = 100;
const grade =(mark)=>{
    if (mark >= 90){
        console.log('A+','Passed');
    }
    else if (mark >= 50){
        console.log ('B+', 'Passed');
    }
    else if (mark>=33){
        console.log('C+','passed');
    }
    else{
        console.log('Failed');
    }
}
grade(50);
/*code for grading system ends.*/
/* Code for arithmetic operations start. */

let n1=10;
let n2=20;
let n3=30;
var result;
const op='plus';
const cal=(n1,n2,n3,op)=>{
    if (op== 'plus'){
        result=n1+n2+n3;
        console.log(result);
    }
    else if(op=='minus'){
        result=n1-n2-n3;
        console.log(result);
    }
    else if(op=='mul'){
        result=n1*n2*n3;
        console.log(result);

    }
    else{
        console.log('undefined');
    }
}
cal();