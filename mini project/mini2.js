function checkPalindrome(str){
    let str1=str.toLowerCase();
    let reverse=str1.split("").reverse().join("");
    if (str===reverse){
        console.log("given string is palindrome");
    }
    else{
        console.log("given string is not palindrome");
    }
}
checkPalindrome("amma");
checkPalindrome("MOTHER");