function fizzbuzz(num){
    if (num%2==0 && num%3!=0){
        return "fizz";
    } else
    if (num%3==0 && num%2!=0){
        return "buzz";
    } else
    if (num%2==0 && num%3==0){
        return "fizzbuzz";
    } else {
        return "Nope"
    }
}

module.exports = fizzbuzz;