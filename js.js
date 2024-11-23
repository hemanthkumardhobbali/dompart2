let a= document.querySelector("div")
document.body.style.backgroundColor="red"
a.style.backgroundColor="lightpink"
a.style.padding="30px"
a.style.color="white"
let b=document.createElement("img")
b.src=" https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/hardik-pandya-300628682-1x1.jpg?VersionId=aEo2j3maAzpz3IQijOuiGPPUBjGfCqsL"
// a.appendChild(b)
b.style.width="200px"
let c= document.createElement("img")
c.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLnBVI8XO_xDqVo_Tu1l36tsWokuROI7Ydg&s"
c.setAttribute=("width","200px")
// a.appendChild(c)
a.append(b,c)
a.replaceChild(c,b)
// a.removeChild()
let d=a.cloneNode(true)
document.body.appendChild(d)



// set attributes
let ntr =document.createElement("img")
ntr.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPO_1f_ZFVQhWptj8vU1acHd5G-bKRjtT21w&s")
ntr.setAttribute("width","600px")
ntr.setAttribute("height","400px")
document.body.append(ntr)
ntr.removeAttribute("height")



// //Event Handling
let book =document.querySelector("div")
book.style.backgroundColor="lightgreen"
let ptag=document.querySelectorAll("p")
console.log(book.firstChild)
console.log(book.firstElementChild)
console.log(ptag[0].firstChild)
console.log(ptag[0].nextSibling)
console.log(ptag[1].nextElementSibling)
console.log(ptag[0].nodeName)
console.log(ptag[3].nodeType)
console.log(book.childNodes)
console.log(book.nodeName)
console.log(book.nodeType)
console.log(book.localName)
console.log(ptag[0].className)
console.log(book.className)
book.insertAdjacentElement("afterbegin",b)
book.insertAdjacentElement("afterend",c)
book.insertAdjacentElement("beforebegin",c)
book.insertAdjacentElement("beforeend",b) 


