function countMultiples(arr) {
    let k={}
    for(let i=1;i<=9;i++) {
        for(let j=0;j<arr.length;j++) {
            if(arr[j]%i==0){
                if(i in k){
                    k[i]+=1
                }
                else{
                    k[i]=1
                }
            }
        }
    }
    return k

}
console.log(countMultiples([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]));

// Output:
// {1:11, 2:8, 3:4, 4:4, 5:3, 6:2, 7:0, 8:1, 9:1}



