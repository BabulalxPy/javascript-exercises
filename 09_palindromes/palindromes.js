const palindromes = function(word){
    let newWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(" ","").toLowerCase();
    let rev = newWord.split('').reverse().join('');
    let newRev = rev.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(" ","").toLowerCase();
    if(newWord === newRev){
        return true;
    }else{
        return false;
    }

};
console.log(palindromes("RE, R..,E R"));
// Do not edit below this line
module.exports = palindromes;
