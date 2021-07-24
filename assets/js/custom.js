let todoInput = document.querySelector('.todo input');
let todoBtn = document.querySelector('.todo button');
let todo_list = document.querySelector('.todo-list ul');
let todo_count = document.querySelector('.card-footer p span');




//click button
todoBtn.onclick = () =>{
    let formVal = todoInput.value;
    let storageVal = localStorage.getItem('todoapp');
    let todoArr;

    
    if( storageVal == null){
        todoArr = [];
     }else{
         todoArr = JSON.parse(storageVal);
     }

    if( formVal == '' ){
        alert('Field are required');
    }else if( todoArr.includes(formVal) ){
        alert('Value already exist');
    }else{
        todoArr.push(formVal);
        localStorage.setItem('todoapp',JSON.stringify(todoArr));
    }

    todoInput.value = '';
    showList();
}


/**
 *  show todo list
 */
function showList() {
    let storageVal = localStorage.getItem('todoapp');
    let todoArr;
    let data = '';

    if( storageVal == null ){
        todoArr = [];
    }else{
        todoArr = JSON.parse(storageVal);
    }
   
    todoArr.map( ( val,index ) =>{
        data += `<li class="list-group-item">${val} <button class="close" onclick="deleteItem(${index})">&times;</button></li>`;
    } );

    todo_list.innerHTML = data;

    todo_count.innerHTML = todoArr.length;

}
showList();

/**
 *  delete todo item
 */

function deleteItem( index ) {
    let storageVal = localStorage.getItem('todoapp');
    let todoArr = JSON.parse(storageVal);
    
    todoArr.splice( index, 1);
    localStorage.setItem('todoapp',JSON.stringify(todoArr));
    showList();
}