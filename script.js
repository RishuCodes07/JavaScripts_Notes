let hold =document.getElementById('changeTextButton').
addEventListener('click',function(){
   let para = document.getElementById('myParagraph');
})

document.getElementById("highlightFirstCity").addEventListener('click',function(){
    let city =document.getElementById('citiesList');
city.firstElementChild.classList.add('highlight')
})
document.getElementById('changeOrder').addEventListener('click',function(){
    let coffeeType= document.getElementById("coffeeType");
    coffeeType.textContent=" Espersso"
    coffeeType.style.backgroundColor ="green"
    coffeeType.style.padding = "5px"
});

document.getElementById("addNewItem").addEventListener('click',function(){
  let newItem =  document.createElement('li')
  newItem.textContent ="Eggs"
    document.getElementById('shoppingList').appendChild(newItem)
});

document.getElementById('removeLastTask').addEventListener('click',function(){
    let taskList = document.getElementById('taskList')
    taskList.lastElementChild.remove()
})
