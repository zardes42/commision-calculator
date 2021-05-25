function calc(val){
    let answer  = document.getElementById('input').value ;

    if(typeof(answer == "number")){
        
        if (answer >= 1 && answer <= 5000){
            document.getElementById('usr-console').innerHTML = 'Your Commission is ₦10' ;
        }
        else if(answer >= 5001 && answer <= 50000){
            document.getElementById('usr-console').innerHTML = 'Your Commission is ₦25' ;
        }
        else if(answer >= 50001 ){
            document.getElementById('usr-console').innerHTML = 'Your Commission is ₦50' ;
        }

    }
     if (typeof(answer) == 'undefined'|| answer =="" ){
       document.getElementById('usr-console').innerHTML = 'Please Input a valid amount in numbers' ;
    }


}



   
