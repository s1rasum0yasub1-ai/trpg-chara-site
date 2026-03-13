let systems = JSON.parse(localStorage.getItem("systems")) || []

let stats = []

function addStat(){

const stat = {
name:"",
dice:""
}

stats.push(stat)

renderStats()

}

function renderStats(){

const container = document.getElementById("stats")

container.innerHTML=""

stats.forEach((s,i)=>{

const div=document.createElement("div")

div.className="statBox"

div.innerHTML=`

能力値名
<input onchange="stats[${i}].name=this.value">

初期ダイス (例:3d6)
<input onchange="stats[${i}].dice=this.value">

`

container.appendChild(div)

})

}

function saveSystem(){

const system = {

name:document.getElementById("systemName").value,
stats:stats

}

systems.push(system)

localStorage.setItem("systems",JSON.stringify(systems))

showSystems()

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
