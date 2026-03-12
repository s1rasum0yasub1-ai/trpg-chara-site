let characters = JSON.parse(localStorage.getItem("characters")) || []

function saveCharacter(){

if(characters.length >= 20){
alert("キャラは20人まで！")
return
}

const character = {

name:document.getElementById("name").value,
age:document.getElementById("age").value,
job:document.getElementById("job").value,
str:document.getElementById("str").value,
dex:document.getElementById("dex").value

}

characters.push(character)

localStorage.setItem("characters",JSON.stringify(characters))

showCharacters()

}

function showCharacters(){

const list = document.getElementById("list")

list.innerHTML=""

characters.forEach((c,i)=>{

const div=document.createElement("div")

div.innerHTML=`
<b>${c.name}</b> (${c.job})
<button onclick="copyCharacter(${i})">📋コピー</button>
`

list.appendChild(div)

})

}

function copyCharacter(i){

const c = characters[i]

const text = `
名前:${c.name}
年齢:${c.age}
職業:${c.job}
STR:${c.str}
DEX:${c.dex}
`

navigator.clipboard.writeText(text)

alert("コピーしました！")

}

showCharacters()
