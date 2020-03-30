// referencing https://codegolf.stackexchange.com/questions/71877/remove-leading-and-trailing-zeroes
// https://flaviocopes.com/how-to-trim-leading-zero-number/

function removeLeadingTrailing(){
 
    var leading = /^[0]+/;
    var trailing = /[0]+$/;
    var trailingDecimal = /[.]$/;
	
    var before = '';
    var after = '';
 
    before = document.forms[0].text1.value;
	
    after = before.replace(leading,'');  // Remove leading 0's
    if (after.indexOf('.')>-1){
        after = after.replace(trailing,'');  // Remove trailing 0's
    }
    after = after.replace(trailingDecimal,'');  // Remove trailing decimal when it the input number is number.0 example 2.0, 2.00 to return 2
 
    document.forms[0].text2.value = after;
	
}