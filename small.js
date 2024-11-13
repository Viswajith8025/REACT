const nums = [8, 1, 2, 2, 3];
const result = new Array(nums.length);

for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
            count++;
        }
    }
    result[i] = count; 
}

console.log(result);