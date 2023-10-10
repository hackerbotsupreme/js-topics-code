// questions 
// 1. create a navbar chBange the colour of its first element to red .
// 2. create a table without tbody now use 'view oage source bitton ' to see it has tbody or not . 
// 3. create an element wit 3 children and now change the color of the first and last to green .
// 4. write a javascript  to change the background color of all <li> tags to cyan .
// 5. which of the following is used to look for the farthest ancestor 
// 1. matches 2.closest 3. contains 4. none of these 

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan";
})     