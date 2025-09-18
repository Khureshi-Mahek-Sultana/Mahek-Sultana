function generateser(a) {
    let result = [];
    for (let i = 1; i < a * 2; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    console.log(result.join(","));
}
generateser(1); 
generateser(2); 
generateser(3); 
generateser(4); 


//Output:
// 1
// 1,3
// 1,3,5
// 1,3,5,7
