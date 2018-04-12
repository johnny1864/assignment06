/*eslint-env browser*/

//STEP 1
/*
window.addEventListener('load', function(){
   'use strict';
    
    function getDays (year, month){
        return new Date(month, year, 0).getDate();
    }
    
    window.console.log(getDays(2, 2018));
    
});
*/

//STEP 2
/*
window.addEventListener('load', function () {
    'use strict';

    //RETURN MONTH FROM DATE ENTERED IN MM/DD/YYYY
    function getMonth(date) {
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        var month = date.slice(0, 2);
        
        console.log(month);
        
        return monthNames[+month - 1];
    }
    
    window.console.log(getMonth('09/04/2016'))

});
*/

//STEP 3
/*
window.addEventListener('load', function(){
    'use strict';
    
    function isWeekend(){
        var date = new Date();
        
       
        if(date.getDay() === 0 || date.getDay() === 6){
            return "It is the weekend";
        }else{
            return 'It is a weekday';
        }
    }
    
    window.console.log(isWeekend());
});
*/

//STEP 4
/*
window.addEventListener('load', function(){
    'use strict';
    
    function getYesterday(){
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        var date = new Date();
        
        if(date.getDay() > 0){
            return days[date.getDay() - 1];
        }else{
            return days[6];
        }
    }
    
    window.console.log(getYesterday());
});
*/

//STEP 5
/*
window.addEventListener('load', function(){
   'use strict';
    
    function getFirstLetter(){
        var date = new Date();
        return date.toString().charAt(0);
    }
    
    window.console.log(getFirstLetter());
});
*/
