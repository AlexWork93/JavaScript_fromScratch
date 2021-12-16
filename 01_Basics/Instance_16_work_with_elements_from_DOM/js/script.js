'use strict';


const divs = {
   div: document.createElement('div'),
   div2: document.createElement('div'),
   div3: document.createElement('div'),
   div4: document.createElement('div'),
   div5: document.createElement('div'),
   div6: document.createElement('div')
}

for (const divsKey in divs) {
   let element = divs[divsKey];
   element.classList.add('black');
}

document.body.append(divs["div"]);


const elementWrapper = document.querySelector('.wrapper');


//Inserts an element to the end
elementWrapper.append(divs["div2"]);


//Inserts an element to the beginning
elementWrapper.prepend(divs["div3"]);

const hearts = document.getElementsByClassName('circle');

//Insert before and after specified element
hearts[0].after(divs["div4"]);
//or listOfElementsBySelector.insertBefore(elementsToInsert, elementBeforeWhichWeWantToInsert);
hearts[2].before(divs["div5"]);

//delete an element from the page

const btns = document.getElementsByTagName('button');

btns[3].remove();

btns[2].replaceWith(divs["div6"]);


//Some ways to add some information inside element
divs.div3.innerText = `Im div${getSomething()}`

function getSomething(){
   let temp =0;
   for (const divsKey in divs) {
      temp++;
      if (divsKey === 'div3'){
         return temp;
      }
   }
   return false;
}

divs.div2.textContent = `Im div${"2"}`;

divs.div4.innerHTML = "<h1>Im H1</h1>";

divs.div5.innerHTML = `<button type="submit">Im button</button>`;






















