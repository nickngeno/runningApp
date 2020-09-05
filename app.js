
const entries = []
const weekely_target = 50
// ul list
const ul_list = document.getElementById("ul_entries")

// progress bar
function progressBar(){
    const total = entries.reduce((total, item) => total + item , 0)
    const percentage = (total / weekely_target ) * 100

    const progressbar = document.getElementById("progressbar")
    const progressbar_inside = document.getElementById("progressbar-inside")
    const progressbac_wrapper = document.getElementById("progressbar-wrapper")

    if(percentage > 0) progressbar_inside.style.background = 'gray';
    progressbar.style.background = `conic-gradient(orange ${percentage}% ,  gray ${percentage}%)`

    if(percentage === 100){
        const achieved = document.createElement('H3')
        achieved.innerHTML= "Bingo! Target Achieved!"
        
        const toast_div = document.getElementById("toast_div")
        toast_div.appendChild(achieved)
        toast_div.style.textAlign = "center"
        
        toast_div.style.color = 'green'
        // toast_div.style.left = '50%'
        // toast_div.style.zIndex = '100'
        // toast_div.style.transform = 'translate(-5%,-50%)'

        // progressbac_wrapper.appendChild(achieved)
    } ;
    // console.log(progressbar);

}
// format average
function formatAverage(value){
    return value.toFixed(2)
}
function getTotals(){
    // calculations 
    const total= entries.reduce((item , total) => item + total, 0 )
    const average  = total / entries.length
    const highest = entries.sort((a,b) => b - a)[0]

    document.getElementById("total_distance").innerText = total
    document.getElementById("average").innerText = formatAverage(average)
    document.getElementById("highest").innerText = highest
    document.getElementById("achieved").innerText = total
    document.getElementById("target").innerText = weekely_target
}
function updateEntry(inputvalue){
    ul_list.removeChild(ul_list.firstElementChild)
// create a lik aitem
    const entry = document.createElement("li")
    // add value to list iem
    const entryval =document.createTextNode(inputvalue)
// append value to li item
    entry.appendChild(entryval)
    // append item to ul
    ul_list.appendChild(entry)
}
function handleSubmit(e){
    e.preventDefault()
    const inputval = Number(document.getElementById('input-cover').value)
    if(!inputval) return;
    document.querySelector('form').reset()
    // console.log(inputval);
    // target the list
    entries.push(inputval)
    updateEntry(inputval)
    getTotals()
    progressBar()
}
const form = document.querySelector('form').addEventListener('submit', handleSubmit);