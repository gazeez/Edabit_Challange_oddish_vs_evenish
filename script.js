
function findOddishorEvenish(num){

   
    var num = document.getElementById('num').value;
    var sum = 0;
// https://stackoverflow.com/questions/38334652/sum-all-the-digits-of-a-number-javascript
// to find the sum of all the digits of a number

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    //https://www.tutorialsmade.com/javascript-find-odd-even-number/
    // Utilized the link to find how to call functions to determine odd or even
    // manipulated it to get my evenish or oddish

    if ( sum % 2 == 0) 
    {
        document.getElementById('result').innerHTML = sum + ' is a Evenish';
    }
    else
    {
        document.getElementById('result').innerHTML = sum + ' is a Oddish';
    }
}