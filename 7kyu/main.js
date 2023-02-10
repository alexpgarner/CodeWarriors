// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels = /[aeiou]/ig
    const matched = str.match(vowels)
    console.log(matched)
    return matched == null ? 0:matched.length;
  }