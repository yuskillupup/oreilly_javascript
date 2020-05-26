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

// オブジェクトとプロパティ
const myObject = {};
myObject.myFunction = ()=>{};
myObject.array = [];
myObject.string = 'string';
myObject.number = 22;
myObject.date = new Date();
myObject.regExp = /a/;
myObject.null = null;
myObject.undefined = undefined;
myObject.object = {};
myObject.path = Math.PI;
console.log(myObject);

// ドット記法
let myFunction = {};
myFunction.array = [3,3];
// ブラケット記法
myFunction['number'] = [2,4];
myFunction.method = () => { return myFunction.number };
console.log(myFunction.number);

let object2 = { 
  '123':'zero',
  'class':'foo'
};
// 数字で始まるプロパティ名は不正、ブランケット記法のみ可能
console.log(object2['123'], object2['class']);

// hasOwnProperty()
let object3 = { 
  'class':'foo'
};
// プロトタイプチェーン経由ではない
console.log(object3.hasOwnProperty('class'));//true
// プロトタイプチェーン経由
console.log(object3.hasOwnProperty('toString'));//false

// オブジェクトがプロパティを保持しているか
console.log('toString' in object3);

// for-inループ
for(let key in object3){
  console.log(key);
}

for ( x in window.document){
  console.log(x);
}