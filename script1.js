document.getElementById("bu").onclick=function(){
  let a=document.getElementById("password").value;
  let bo=true;
  let alp=0;let uc=0;let lc=0;let num=0;let sp=0;
  let alp1=0;
  let st= document.querySelector("#re");
  if(a.length<=5){
    return bo=false;
  }
   else{
    for(let i=0;i<a.length;i++){
      alp = a.charCodeAt(i);
      if(alp>=65&&alp<=122){
        alp1++;
        if(a[i]==a[i].toUpperCase()){
          uc++;
        }
        else{
          lc++;
        }
      }
      else if(a[i]>=0&&a[i]<=9){
        num++;
      }
      else{
        sp++;
      }
    }
    if(alp1>=5&&uc>=2&&lc>=3&&num>=3&&sp>=1){
      st.textContent = `It is strong ✔️`
      st.style.color = "green";
      //st.style.size=50;
    }
    else if(alp1>=3&&uc>=1&&lc>=2&&num>=1&&sp>=1){
      st.textContent="It is good 👌";
      st.style.color = "blue";
    }
    else{
      st.textContent="It is weak ❌";
      st.style.color = "red";
    }
  }
}
document.getElementById("sh").onclick=function(){
  let pass=document.getElementById("password");
  if(pass.type==="password"){
    pass.type="text";
  }
  else{
    pass.type="password";
  }
}