

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // global (random) parameters
// Declare your variables here





// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};



// Error feedback if participants exceed the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [7500];
    }
    // reminder for the participant to answer if he did not already in the first 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// comparison of the chosen answer with the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! You are very smart!');
        } else {
            alert('We are very sorry, but your answer is incorrect. The correct answer was ' + data.correct);
        }
        next();
    })
}
