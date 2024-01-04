let submitbtn = document.querySelector("form .button");
submitbtn.addEventListener("click", async function (e) {
  e.preventDefault();
  email = document.querySelector("form input").value;
  
  let cont = document.querySelector(".resultcont");
  cont.innerHTML= `<img  width="90px" src="loading.svg" alt=""></img>`

  const key = "ema_live_oNuL3YejOUhmTp6yywv5LNXG7bcVSUsmrvGVFRwd";
  const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  
  let str = ``;
  for (const items of Object.keys(result)) {
    if (result[items] !== "" && result[items] != " ") {
      str += `<div>${items}  :   ${result[items]}</div>`;
    }
    cont.innerHTML = str;
  }
});

