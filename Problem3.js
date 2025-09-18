function generateSeries(a) {
    let k=[]
    if (a%2==0){
        a-=1
    }
    for (let i=1;i<a*2;i+=2){
        k.push(i)
    }
    console.log(k.join(','))
}
generateSeries(1)
generateSeries(2)
generateSeries(3)
generateSeries(4)
generateSeries(5)
generateSeries(6)

// Output:
// 1
// 1
// 1,3,5
// 1,3,5
// 1,3,5,7,9
// 1,3,5,7,9


