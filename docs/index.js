
const buttons= Array.from(document.getElementsByClassName("myButtons"));
const display= document.getElementById("display");



buttons.map( myButtons => {
myButtons.addEventListener('click', (e) => {

  switch(e.target.innerText){
 
    case '=':
        try{
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = "Error"
        }
        break;
  case 'X':
      display.innerText = display.innerText +="*";



        break;
    case 'C':
        if (display.innerText){
           display.innerText = "";
        }
        break;
  case 'Delete':
      if(display.innerText){
        display.innerText = display.innerText.slice(0, -1);
      }
   break;
  
    default:
        display.innerText += e.target.innerText;
}
});
});
  
  

//convert Nodelist to array










//for any elements i type, I want you to be able to perform 
//an arithmetic function on it.