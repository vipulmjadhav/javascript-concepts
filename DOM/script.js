//document.getElementById returns the element object hence ..textContent and .innetHTML are valid

var divtag = document.getElementById('bk');
console.log(divtag.textContent);

//document.getElementsByClassName returns the HTML collection hence .textContent ang innerHTML cant used.
//document.getElementsByTagName returns the HTML collection hence .textContent ang innerHTML cant used.
//document.querySelectorAll() returns NodeList.
//querySelector returns the element Object.

var divbyquery = document.querySelectorAll('div');
console.log(divbyquery);


//as most of return types are similar to array like objects , hence for using innerHTML,textContent 
//we have to use the syntax as

console.log(divbyquery[0].textContent);

//we can change the text of the html element using the .textContent as well as innerHTML

var query = document.querySelector('div');
console.log(query);

console.log(divbyquery);

/*--------------------------------------------
If the return type is compatible to return only one element then ie elementObject.
If the return type is compatible to return multiple elements then ie HTMLCollection if if is getElement
If the return type is compatible to return mulitple elemenst using querySelector then ie NodeList.
---------------------*/


//addEventListener => target.addEventListener
//targets may be document,element,window.

var paras = document.getElementById('new');
paras.addEventListener('click',()=>{
    console.log('clicked');
})

//document.getElementsByClassName does not works with addEventListener
var parasid = document.querySelectorAll('div');
//to work with HTMLCollections ad Nodelist we have to tweak it as

parasid[0].addEventListener('click',()=>{
    console.log('clicked');
})




