//We have to detect if the 2 strings are anagrams or not
function isAnagram(str1,str2){
    var freq1 = {}
    var freq2 = {}
    for(let char of str1){
        freq1[char] = (freq1[char]||0)+1
    }
    for(let char of str2){
        freq2[char] = (freq2[char]||0)+1
    }
    for(let key in freq1){
        if(freq1[key]!==freq2[key]){
            return false;
        }
    }
    return true
}

console.log(isAnagram('aza','aaz'))