let strs = ["eat","tea","tan","ate","nat","bat"]


function anagrams(strs){
    
    let map = new Map()
    let results = []
    
    for(let word of strs){
          
        
        let sortedWord = word.split('').sort().join('')
        console.log(sortedWord)
        if(map.has(sortedWord)){
            
            let arr = map.get(sortedWord)
            map.set(sortedWord, arr + "," + word)
        }else{
            map.set(sortedWord, word)
        }
    }
    
    for(let [a, arr] of map){
        arr.split(",")
        let sub = []
        sub.push(arr)
        results.push(sub)
    }
    
    return results
}

console.log(anagrams(strs))