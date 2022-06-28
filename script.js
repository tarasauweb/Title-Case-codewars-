function titleCase(title, minorWords) {
    let titleArr = null
    let minorArr = null
    let result = []
    if(minorWords){
        titleArr = title.toLowerCase().split(' ');
        minorArr = minorWords.toLowerCase().split(' ');
        for(let i = 0; i < titleArr.length; i++) {
        if(minorArr.includes(titleArr[i])){
            result.push(titleArr[i])
        }
        else{
            result.push(titleArr[i][0].toUpperCase()+titleArr[i].slice(1))
        }
    }
        if(result.length===1){
            result = result[0][0].toUpperCase()+result[0].slice(1)
        }
        else{
            let firstWord = result[0][0].toUpperCase()+result[0].slice(1)
            result = firstWord + ' ' + result.slice(1).join(' ')
        }
    }
    else if(!minorWords && title){
        titleArr = title.toLowerCase().split(' ');
        titleArr = titleArr.map(item=>{
            return item[0].toUpperCase() + item.slice(1)
        })
        result = titleArr.join(' ')
        
    }
    else if(!title){
        result = '' , ''
    }
    return result
}
titleCase('ab' , 'ab')