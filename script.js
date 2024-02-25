var date=document.createElement("input")
date.setAttribute("type","date")
date.id="dob"

var button=document.createElement("button")
button.setAttribute("type","button")
button.className="btn btn-primary"
button.innerHTML="click me"
button.addEventListener("click",date_data)






document.body.append(date,button)

function date_data(){

    var br=document.createElement("br")
    console.log(br)


    var input=document.getElementById("dob").value
    var inputdate=new Date(input)
    var currentdate=new Date()
    console.log(currentdate)

    var millisec=parseInt(currentdate.getTime()-inputdate.getTime())
    console.log(`Millisecond ${millisec}`)

    var sec=Math.floor(millisec/1000)
    console.log(`second ${sec}`)

    var min=Math.floor(sec/60)
    console.log(`minute ${min}`)

    var hour=Math.floor(min/60)
    console.log(`Hour ${hour}`)

    var day=Math.floor(hour/24)
    console.log(`Day ${day}`)

    var year=currentdate.getFullYear()-inputdate.getFullYear()
    console.log(`Year ${year}`)

    var month=(year*12)+(currentdate.getMonth()-inputdate.getMonth())
    console.log(`Month ${month}`)

    var span=document.createElement("span")
    span.className="Call"
    span.innerHTML=currentdate
    

    var div=document.createElement("div")

    var span=document.createElement("span")
    span.className="Call"
    span.innerHTML= `Current Date: ${currentdate}<br>Year: ${year}<br>Month: ${month}<br>Day: ${day}<br>Hour: ${hour}<br>Minute: ${min}<br> Second: ${sec}<br>Millisecond: ${millisec}`;
    div.append(span)
   


    

    document.body.append(div)

}