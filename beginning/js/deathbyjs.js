/*eslint-env browser*/

//STEP 1
/*
window.addEventListener('load', function(){
    function orderChars(str){
        'use strict';
        
        str = str.split('').sort().join('');
        
        return str
    }
    
   window.console.log(orderChars('webmaster')); 
});
*/

//STEP 2
/*
window.addEventListener('load', function () {

    function toUpper(str) {
        'use strict';

        str = text.split(' ').map(function (word) {
            return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
        }).join(' ');

        return str;
    }

    var text = 'The quick brown fox jumps over the lazy dog';

    window.console.log(toUpper(text));
});
*/

//STEP 3
/*
window.addEventListener('load', function (str) {

    function vowelCounter(str) {
        'use strict'
        var counter = 0;
        str.toLowerCase().replace(/\s/g, '').split('').forEach(function (char) {
            if (char === 'a' || char === 'i' || char === 'e' || char === 'o' || char === 'u'){
                counter++;
            }
        });

        return counter;
    }

    var text = 'The quick brown fox';

    window.console.log(vowelCounter(text));
});
*/

//STEP 4
/*
window.addEventListener('load', function(){
    'use strict';
    
    function randomID(len){
        var newStr = '';
        var randomNumber;
        
        for (var i = 0; i< len; i++){
            randomNumber = Math.floor(Math.random()*(89) + 32);
            newStr += String.fromCharCode(randomNumber);
        }
        return newStr;
    }
    
    window.console.log(randomID(15));
    
});
*/

//STEP 5
/*
window.addEventListener('load', function () {
    'use strict';

    function longestName(counties) {
        var longest = '';

        counties.forEach(function (country) {
            if (country.length > longest.length) {
                longest = country
            }
        });
        
        return longest;
    }
    
    var longest = longestName(["Australia", "Germany", "United States of America"]);
    window.console.log(longest);

});
*/
