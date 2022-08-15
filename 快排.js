function quickSort(arr) {
    if (arr.length === 0) return arr;
    const midIndex = Math.floor(arr.length / 2);
    const midValue = arr.splice(midIndex, 1)[0];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i]);
        } else {

            right.push(arr[i]);
        }

    }

    return quickSort(left).concat( [midValue],quickSort(right));
}
/**
 *  
 */
function quickSort(nums){

    if(nums.length ===0) return nums;

    let midIndex = Math.floor( nums.length /2);
    let midValue = nums.splice(midIndex,1)[0];

    const left = [];
    const right = [];
    for(let i = 0; i<nums.length; i++){
        if( nums[i] <midValue){
            left.push(nums[i])
        }else{
            right.push(nums[i]);
        }
    }
    return quickSort(left).concat([midValue],quickSort(right));
}
/**************************************** */
function quickSort(arr){

    if(!arr.length) return arr;
    let midIndex = Math.floor( arr.length /2);
    let midValue = arr.splice( midIndex ,1 )[0];

    let left = [];
    let right = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < midValue){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([midValue], quickSort(right));
}