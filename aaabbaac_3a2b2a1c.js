function count(str){
    const result = [];

    let l = 0, r = 0,sum = 0;
   while( r <= str.length){
        if( str[l] === str[r]){
            r++;
            sum++;
        }else{
            result.push(sum+str[l]);
            l = r;
            sum = 0;
        }
    }
    return result.join('');
    
}
console.log(count('aaabbaaac'));
