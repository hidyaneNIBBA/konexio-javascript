function IsPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++){
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }
}
  console.log(IsPalindrome('racecar'))
  console.log(IsPalindrome('eye'))
  console.log(IsPalindrome('never odd or even'))
  console.log(IsPalindrome('eyes'))