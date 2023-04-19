const prn=document.getElementById("namep")
const prel=document.getElementById("unitp")
const prb=document.getElementById("billp")
const button=document.getElementById("sub")

button.addEventListener("click",bill)

function bill()
{
    var user=document.getElementById("user").value
    var units=parseInt(document.getElementById("units").value)
    var tbill=0;
    if(units>300)
    {
        tbill=tbill+(units*5.0)
        tbill+=200
        tbill+=600
        tbill+=units*0.025
    }
    else if(units>100)
    {
        tbill+=units*3.0
        tbill+200
    }
    else
    {
        tbill+=units*2.0
    }
    const unitfinal=units.toString()
    const tbillfinal=tbill.toString()
    prn.textContent=user
    prel.textContent=unitfinal
    prb.textContent=tbillfinal
    console.log(unitfinal)
    console.log(tbillfinal)
}