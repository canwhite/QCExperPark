/*
splice
粘接的意思


return: 
返回已经删除的项形成的数组
如果是新增的不会返回数组

主要是对原数组造成影响
*/

let arr = [0,1,2,3,4]

//(1)删除，起始位置和删除项数
console.log('-----delete----',arr.splice(0,1))

//(2)插入，paras：起始位置，删除项目数(0),插入的项目

console.log('----add----',arr.splice(0,0,7,8,9),arr)


//(3)替换，删除几项，替换几项

console.log('---replace---',arr.splice(0,3,10,11,12),arr)