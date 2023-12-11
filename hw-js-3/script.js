

//======== Part 1 ========


function getTypeOf(x) {

    console.log('Type of parametar is:' + typeof x)

}

getTypeOf({ x: 5 });
getTypeOf(!!5);
getTypeOf(5);
getTypeOf("a");
getTypeOf();

//======== Part 2 ========




function calculateAge(ageValue, ageType) {

    let parsedAgeValue = parseInt(ageValue);
    let ratio = 7;

    if (ageType === 'human') {



        return parsedAgeValue * ratio;

    }

    else if (ageType === 'dog') {



        return parsedAgeValue / ratio;
        

    }
    else {

        return 'Invalid ageType, use "dog" or "human"';
    }



}

//======== Part 3 ========

let requestAmmount = prompt("Enter request ammount");



function calc(requestAmmount){
    
    
    let parsedRequestAmmount = parseInt(requestAmmount);
    let balance = 5000;

if (parsedRequestAmmount <= balance) {

    

    return balance - parsedRequestAmmount; 


}
else{

     console.log("Not enough money");
}

}





