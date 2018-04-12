/*eslint-env browser*/

//STEP 1
/*
window.addEventListener('load', function () {
    'use strict';
    var number = window.prompt('Enter a number');
    
    if (number === '' || isNaN(+number)) {
        window.alert('Enter valid number')
        
    }else{
        window.alert(Math.abs(+number));
    }
});
*/

//STEP 2
/*
window.addEventListener('load', function () {
    'use strict';
    var numbers = window.prompt('Enter a decimal value: ');
    
    numbers = Math.ceil(parseInt(numbers, 10));
    
    window.console.log(numbers);

});
*/

//STEP 3
/*
window.addEventListener('load', function () {
    'use strict';
    
    var numbers = window.prompt('Enter a decimal value: ');
    
    numbers = Math.floor(parseInt(numbers, 10));
    
    window.console.log(numbers);
    
});
*/

//STEP 4
/*
window.addEventListener('load', function () {
    'use strict';
    var numbers = window.prompt('Enter 5 numbers delimited by commas: ');

    numbers = numbers.split(',');
    
    var min = numbers[0];
    var max = numbers[0];

    numbers.forEach(function (number) {

        if ((+number) > max) {
            max = (+number);
        }
        if ((+number) < min) {
            min = (+number);
        }
    });

    window.console.log('Min is ' + min, 'Max is ' + max);

});
*/

//STEP 5
/*
window.addEventListener('load', function () {
    'use strict';
    
    var root = window.prompt('Enter a number to square: ');
    
    root = Math.sqrt(+root);
    
    window.console.log(root);
    
});
*/
