const student=[
    {id:1802055,name:"tonmoy"},
    {id:1802054, name:"Shotabdi"},
    {id:1802056,name:"Sharif"},
    {id:180252,name:"Sakib"}
]
const output = []
// for(let i=0;i<student.length;i++){
//     // const element=student[i]
//     const names = student[i].name
//     // console.log(element)
//     output.push(names)
// }
const names = student.map(s=>s.name)
const ids = student.map(s=>s.id)
const bigger = student.filter(s=>s.id>1802054)
const biggerOne = student.find(s=>s.id>1802054)
console.log(ids)
console.log(bigger)
console.log(biggerOne)







