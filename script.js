let systems = JSON.parse(localStorage.getItem("systems")) || []

let stats=[]

function addStat(){

const stat={
name:"",
dice:""
}

stats.push(stat)

renderStats()

}

function renderStats(){

const container=document.getElementById("stats")

container.innerHTML=""

stats.forEach((s,i)=>{

const div=document.createElement("div")

div.className="statBox"

div.innerHTML=`

能力値名
<input value="${s.name}" onchange="stats[${i}].name=this.value">

初期ダイス
<input value="${s.dice}" onchange="stats[${i}].dice=this.value">

<button onclick="rollStat(${i})">🎲振る</button>

<span id="result${i}"></span>

`

container.appendChild(div)

})

}

function applyBaseSystem(){

const type=document.getElementById("baseSystem").value

stats=[]

if(type==="coc"){

stats=[

{name:"STR",dice:"3d6"},
{name:"CON",dice:"3d6"},
{name:"POW",dice:"3d6"},
{name:"DEX",dice:"3d6"},
{name:"APP",dice:"3d6"},
{name:"SIZ",dice:"2d6+6"},
{name:"INT",dice:"2d6+6"},
{name:"EDU",dice:"2d6+6"}

]

}

if(type==="emoklore"){

stats=[

{name:"身体",dice:"1d6"},
{name:"器用",dice:"1d6"},
{name:"精神",dice:"1d6"},
{name:"五感",dice:"1d6"},
{name:"知識",dice:"1d6"}

]

}

renderStats()

}

function rollDice(formula){

const parts=formula.split("d")

let count=parseInt(parts[0])

let rest=parts[1]

let bonus=0

if(rest.includes("+")){

const r=rest.split("+")

rest=r[0]
bonus=parseInt(r[1])

}

let dice=parseInt(rest)

let total=0

for(let i=0;i<count;i++){

total+=Math.floor(Math.random()*dice)+1

}

return total+bonus

}

function rollStat(i){

const formula=stats[i].dice

const result=rollDice(formula)

document.getElementById("result"+i).innerText=" = "+result

}

function saveSystem(){

const system={

name:document.getElementById("systemName").value,
stats:stats

}

systems.push(system)

localStorage.setItem("systems",JSON.stringify(systems))

showSystems()

}

function showSystems(){

const list=document.getElementById("systemList")

list.innerHTML=""

systems.forEach((s)=>{

let statText=""

s.stats.forEach(st=>{
statText+=st.name+"("+st.dice+") "
})

const div=document.createElement("div")

div.innerHTML=`

<b>${s.name}</b>
<br>
能力値:${statText}

`

list.appendChild(div)

})

}

showSystems()
