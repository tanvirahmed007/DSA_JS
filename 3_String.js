//String Reverse

function reverseString(s) {
    return s.split('').reverse().join(''); // একটি সহজ পদ্ধতি স্ট্রিং রিভার্স করার জন্য
}

// ব্যবহার
let inputString = "hello";
let reversedString = reverseString(inputString);
console.log("Reversed string:", reversedString); // আউটপুট: olleh

// এখানে আমরা প্রথমে স্ট্রিংটি অ্যারেতে ভেঙ্গে ফেলি, তারপর অ্যারেটিকে রিভার্স করি এবং তারপর আবার স্ট্রিং হিসেবে জয়েন করি।

//---------------------------------------------------------------------------------------------

//Palindrome

// প্যালিন্ড্রোম হল এমন একটি স্ট্রিং যা উল্টো করলে একই থাকে। উদাহরণস্বরূপ, "madam" এবং "racecar" প্যালিন্ড্রোম।

function isPalindrome(s) {
    return s === s.split('').reverse().join(''); // স্ট্রিংটি উল্টো করে নিজেই সমান কি না পরীক্ষা
}

// ব্যবহার
const inputString = "madam";
if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}

//---------------------------------------------------------------------------------------------
//Substring Search

// সাবস্ট্রিং সার্চ হল একটি নির্দিষ্ট স্ট্রিংয়ের মধ্যে অন্য একটি স্ট্রিং খুঁজে বের করা। এটি সাধারণত indexOf() ফাংশন ব্যবহার করে করা হয়।

function substringSearch(mainString, substring) {
    return mainString.indexOf(substring); // Returns the first index of the substring, or -1 if not found
}

// Usage
let mainString = "Hello, welcome to the world of programming.";
let substring = "welcome";
let position = substringSearch(mainString, substring);

if (position !== -1) {
    console.log(`Substring '${substring}' found at index ${position}.`);
} else {
    console.log(`Substring '${substring}' not found.`);
}

//---------------------------------------------------------------------------------------------

