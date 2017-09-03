// var s = "hello world"
// alert(s);
// 
var array = [1, 2, 3, 5, 7, 8, 9];

var r = array.filter(function(x){

	return x%2 != 0;
})

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],

    //可以直接在对象声明这里添加toJSON属性， 之后再调用JSON.stringify()方法时，会执行下列的JSON格式。
    //这里面必须要是JSON格式。
    toJSON: function(){
    	return{}
    	'Name': '小明',
    	 'Age': 13 
    	};
    }
};

// 直接将对象xiaoming的所有属性转化为JSON格式。
JSON.stringify(xiaoming, null , ' ');

// 选择对象xiaoming的部分属性转化为JSON格式。
JSON.stringify(xiaoming, ['name', 'age', 'skills'], ' ');

function convert(key ,value){
	if (typeof(value) === 'string') {
		return value.toUppercase();
	}
	return value;
}
// 第二个参数也可以传入一个函数。
JSON.stringify(xiaoming, covert, ' ');