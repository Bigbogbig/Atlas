let xp = Number(localStorage.getItem("xp") || 0);
let money = Number(localStorage.getItem("money") || 0);

function save(){
localStorage.setItem("xp", xp);
localStorage.setItem("money", money);
updateUI();
}

function addXP(value){ xp += value; save(); }
function addMoney(value){ money += value; save(); }

function getRank(){
if(xp<500) return "Bronze";
if(xp<1500) return "Silver";
if(xp<3000) return "Gold";
if(xp<6000) return "Platinum";
if(xp<10000) return "Diamond";
return "Elite";
}

function updateUI(){
document.getElementById("xp").innerText = xp + " XP";
document.getElementById("rank").innerText = getRank();
document.getElementById("progress").style.width = (xp%500)/5 + "%";
}

updateUI();

const ctx = document.getElementById("chart");
new Chart(ctx, {
type:"line",
data:{
labels:["Seg","Ter","Qua","Qui","Sex","Sab","Dom"],
datasets:[{
data:[12,19,3,5,2,3,9],
borderColor:"#ffffff",
backgroundColor:"transparent"
}]
},
options:{
plugins:{legend:{display:false}},
scales:{x:{display:false},y:{display:false}}
}
});