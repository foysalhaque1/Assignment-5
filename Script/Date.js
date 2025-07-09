

const now = new Date();

const monthsName = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
const dayName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const day = dayName[now.getDay()];
console.log(day)
const month =monthsName[now.getMonth()];
const date = now.getDate()
const year = now.getFullYear();
console.log(day)
const updateDate = `${day} ${month} ${date} ${year}`;
document.getElementById("date").innerText = updateDate