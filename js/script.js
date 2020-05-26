// $(function() {
//   $("#hide-text").click(function(){
//     $(".content p").slideUp();
//   })
// });

this.name = 'green'

const color = {
  color1: "red",
  color2: "blue",
  thisGet : () =>{
    return this.name
  },
  objectGet : () =>{
    return color.color2
  }
}

console.log(color.thisGet());

console.log(color.objectGet());


// コンストラクタ
class Member{　//大文字がルール
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}



const member = new Member('太郎', 30);
console.log( member );

console.log(member.constructor);

//　配列の定義 オブジェクト
const array1 = new Array('リンゴ', 'バナナ', 'イチゴ');
 //　配列の定義 リテラル
const array2 = ['リンゴ', 'バナナ', 'イチゴ'];

console.log(array1);
console.log(array2);



// プリミティブ値
let myString  = 'foo'
let myStringCopy  = myString
myString  = 'hoge'
console.log(myString, myStringCopy)

// オブジェクトの保存とコピー　相対的に変化（アドレスが保存されるため）
let object = {};
let copyObject = object;
object.foo = 'bar';
console.log(object, copyObject);

// 配列も同様
let array3 = ['リンゴ', 'バナナ', 'イチゴ'];
let array4 = array3
array3.push("apple");
console.log(array4);

