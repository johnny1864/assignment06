/*eslint-env browser*/

//STEP 1
/*
window.addEventListener('load', function(){
   'use strict';
    var name = '';
    do{
        name = window.prompt('What is you name?');
    
        if(!name){
            window.alert('Please enter a name!');
        }else{
            window.alert('Your is a lenght of ' + name.length);
        }
        
    }while(name === '')
    
});
*/

//STEP 2
/*
window.addEventListener('load', function () {
    'use strict';

        var name = window.prompt('What is your name: ');
        var char = window.prompt('Enter the char number: ');

        window.alert(name.charAt(+char));
    

});
*/

//STEP 3
/*
window.addEventListener('load', function () {
    'use strict';

    var firstName = window.prompt('What is your first name: ');
    var lastName = window.prompt('What is your last name: ');

    window.alert('Your name is ' + firstName.concat(lastName));

});
*/

//STEP 4
/*
window.addEventListener('load', function () {
    'use strict';
    var text = 'The quick brown fox jumps over the lazy dog';

    window.alert(text.indexOf('fox'));

});
*/

//STEP 5
/*
window.addEventListener('load', function () {
    'use strict';
    var text = 'The quick brown fox jumps over the lazy dog';

    window.alert(text.lastIndexOf('fox'));

});
*/

//STEP 6
/*
window.addEventListener('load', function () {
    'use strict';

    var text = 'The quick brown fox jumps over the lazy dog';
    
    var name = window.prompt('What is your full name: ');
    
    var newText = text.replace('the lazy dog', name);

    window.alert(newText);

});
*/

//STEP 7
/*
window.addEventListener('load', function () {
    'use strict';
    
    var text = 'The quick brown fox jumps over the lazy dog';
    
    var word = window.prompt('Enter a search word: ');
    
    if(text.search(word) >= -1){
        window.alert('The word is at ' + text.search(word));
    }else{
        window.alert('Word was not found');
    }

});
*/

//STEP 8
/*
window.addEventListener('load', function () {
    'use strict';
    
    var text = 'The quick brown fox jumps over the lazy dog';
    
    var oldString = text.slice(text.indexOf('the lazy dog'));
    
    window.alert(oldString);
});
*/

//STEP 9
/*
window.addEventListener('load', function () {
    'use strict';
    
    var text = "           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
    window.alert(text.trim().toLowerCase());

});
*/


//STEP 10
/*
window.addEventListener('load', function () {
    'use strict';

    var text = 'The quick brown fox jumps over the lazy dog';

    text = text.split(' ').map(function (word) {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    }).join(' ');
    
    window.alert(text);

});
*/
