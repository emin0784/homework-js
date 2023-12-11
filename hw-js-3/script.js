

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

        humanAge = parsedAgeValue * ratio;
        console.log (`${ageValue} dog years is ${humanAge} ${ageType} years`)

        return humanAge;

    }

    else if (ageType === 'dog') {

        dogAge = parsedAgeValue / ratio;


        console.log (`${ageValue} human years is ${dogAge} ${ageType} years`);
        return dogAge;
    }
    else {

       console.log ( 'Invalid ageType, use "dog" or "human"');
    }



}

calculateAge(ageValue,ageType);

//======== Part 3 ========

let requestAmmount = prompt("Enter request ammount");

let balance = 5000;


function calc(requestAmmount) {


    let parsedRequestAmmount = parseInt(requestAmmount);

    if (parsedRequestAmmount <= balance) {

         balance -= parsedRequestAmmount;
        console.log(` Take your ${requestAmmount} and you have ${balance} amount left`)


        return requestAmmount;

    }
    else if  (parsedRequestAmmount > balance) {

        console.log("Not enough money");
    }

    else {
        
        return 'Invalid value'
    }

}

calc(requestAmmount);




