
var a='6'



// console.log(a++ + a--)
//a++ =6 sau do a=7
//+
//a-- =7 sau do a=6
// console.log(a++ *2 + --a *2)

console.log('100'/ a)

// function declare//
// var x = function() {
//     alert('àdsf')
// }
// x()

// function aa(){
//     alert('dfg')
// }
// aa()


//======= khai bao obj
// var obj = {
//     name: 'trung',
//     age: 11,
//     tenham: function(){
//         alert('hey you')
//     }
// }

// console.log('no ne',obj)


//====== array khiai bao
// var arrayne =['x','y', 11]

// console.log('array', arrayne)

//=== chuoi qua dai
// var x='xin chào các bạn mình tên là ngô quang '
// +"\n trung  "
// console.log(x)

//===== chuoi ``
// var a='a ne'
// console.log('a dau'+' '+ a)
// console.log(`dau ne ${a} ${a}`)


//=== xu ly chuoi
// a='  abc xx aa xx a    abc'
// console.log(a.length)
// console.log(a.indexOf('abc',1))
// console.log(a.search('abc'))
// console.log(a.lastIndexOf('abc'))
// console.log(a.slice(4,6))
// console.log(a.slice(4)) //tu vi tri 4 den het
// console.log(a.slice(-3,-1)) //tu vi tri cuoi tro ve trc

// console.log(a.replace('xx', 'TRUNG'))
// console.log(a.replace(/xx/g, 'TRUNG'))

// console.log(a.toUpperCase(a))

// console.log(a.trim()) //loai bo space 2 dau

// var c='a, b, c, d'
// console.log(c.split(', ')) 
// console.log(c.charAt(3))
// console.log(c[3])

var d= 10 - 'aaa'
var x='2'
var k= x.toString()
var n=3.546890
console.log(x.toString())
console.log(n.toFixed(2))
console.log(isNaN(d))

//=========== aray
var arrayne =[
    'stringne',
    123,
    null,
    function(){
        alert('ddd')
    }
]
console.log(arrayne)
console.log(arrayne[0])
//check array
console.log(Array.isArray(arrayne))