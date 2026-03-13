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

}

function showSystems(){

const list=document.getElementById("systemList")

list.innerHTML=""

systems.forEach((s,i)=>{

const div=document.createElement("div")

let statText=""

s.stats.forEach(st=>{
statText+=st.name+"("+st.dice+") "
})

div.innerHTML=`
<b>${s.name}</b>
<br>
能力値:${statText}
`

list.appendChild(div)

})

}

showSystems()
