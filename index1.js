const marks = [ 10,20,50,60,80,100,120,80,40]
let largest = marks[0]
for (const num of marks)
{
    if(num>largest)
    {
        largest=num
    }
}
console.log(largest)