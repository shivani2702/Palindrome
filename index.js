const input = document.getElementById("input");
function checkPalindrome() {
    const value = input.value;
    const reverse = reverseString(value);

    if (value === reverse) {
        alert("This is PALINDROME");
    }
    else {
        alert("Not Palindrome");
    }
    input.value = "";

}
function reverseString(str) {
    return str.split("").reverse().join("");
}