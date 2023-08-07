var result;
const op='plus';
const cal=(n1,n2,op)=>{
    if (op== 'plus'){
        result=n1+n2;
        console.log(result);
    }
    else if(op=='minus'){
        result=n1-n2;
        console.log(result);
    }
    else if(op=='mul'){
        result=n1*n2;
        console.log(result);

    }
    else if(op=='div'){
        result=n1/n2;
        fixResult= result.toFixed(2);
        console.log(fixResult);
    }
    else if(op=='rem'){
        result=n1%n2;
        console.log(result);  /*for reminder */
    }
    else{
        console.log('undefined');
    }
}
cal(4,3, 'div');