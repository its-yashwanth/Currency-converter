// Const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}"
const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"

const btn=document.querySelector("form button")
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg")
const dropdowns= document.querySelectorAll(".dropdown select")

document.addEventListener("load",async(evt)=>{
  
})
for(let select of dropdowns)
{
    for(let currCode in countryList)
    {
        let newOption =document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD")
        {
         newOption.selected="selected" ;
        }
        else if(select.name==="to" && currCode==="INR"){
         newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>
    {
       updateFlag(evt.target);
    });
}

const updateFlag = (element) =>
{
  //console.log(element)
  let currCode=element.value;
  //console.log(currCode);
  countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img=element.parentElement.querySelector("img");
  img.src = newSrc;
}


btn.addEventListener("click",async(evt)=>{
      evt.preventDefault();
      let amount=document.querySelector(".amount input");
      let amtval=amount.value;
      // console.log(amount)
      console.log(amtval)
      if(amtval==="" && amtval<1)
      {
        amtval=1;
        amount.value = "1";
      }
    console.log(fromCurr.value);
    console.log(toCurr.value);
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
   let response =await fetch(URL);
  //  console.log(response)
  let data=await response.json();
  let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  // console.log(data);
  // console.log(rate);
  let finalAmount=amount.value* rate;
  msg.innerText=`${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
});

