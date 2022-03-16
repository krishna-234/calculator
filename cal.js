let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenval='';
for(item of buttons)
{
    item.addEventListener('click',cal)
    function cal(e){
        buttontext=e.target.innerText;
        console.log( buttontext);

       if(buttontext=='*')
        {
            screenval+='*';
            screen.value=screenval;
        }
       else if(buttontext=='C')
       {
        screenval="";
         screen.value=screenval;
       }
       else if(buttontext=='B')
       {
        let rmv=screenval.substring(0,screenval.length()-1);
         screen.value=rmv;
       }
       else if(buttontext=='=')
       {
           screen.value=eval(screenval);
       }
       
       else 
       {
           screenval+=buttontext;
           screen.value=screenval;
       }
    }
       
    
   
}