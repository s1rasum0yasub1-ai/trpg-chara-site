let systems = JSON.parse(localStorage.getItem("systems")) || []

function saveSystem(){

const system={

name:document.getElementById("name").value,
dice:document.getElementById("dice").value,
stats:document.getElementById("stats").value,
rule:document.getElementById("rule").value

}

systems.push(system)

localStorage.setItem("systems",JSON.stringify(systems))

showSystems()

}

function showSystems(){

const list=document.getElementById("list")

list.innerHTML=""

systems.forEach((s,i)=>{

const div=document.createElement("div")

div.innerHTML=`
<b>${s.name}</b>
<br>
ダイス:${s.dice}
<br>
能力値:${s.stats}
<br>
<button onclick="playSystem(${i})">🎲試す</button>
`

list.appendChild(div)

})

}

function playSystem(i){

const s=systems[i]

alert(
"システム:"+s.name+"\n"+
"ダイス:"+s.dice+"\n"+
"能力値:"+s.stats+"\n"+
"ルール:"+s.rule
)

}

showSystems()
