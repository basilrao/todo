var todoitem = document.getElementById("todoitem");

const database=firebase.database();
var count = 0;
function addItem() {

    var inputvalue = document.getElementById("inputvalue");
    if (inputvalue.value.trim()) {
        var value = document.createElement("li");
        
        var editButton = document.createElement("button");
        
        
        editButton.innerText = "EDIT"
        editButton.onclick = function () {
            var update = document.getElementById("update");
            update.style.visibility = 'visible';

            inputvalue.value = value.childNodes[0].textContent;
            value.childNodes[0].textContent = "insert new value";
            update.onclick = function () {
                
                value.childNodes[0].textContent = inputvalue.value;
                inputvalue.value = null;
                update.style.visibility = 'hidden';

            }
            

        }
        var deleteButton = document.createElement("button");
        
        deleteButton.onclick = function () {
            todoitem.removeChild(value);
        }
        deleteButton.innerText = "DELETE"
        value.innerText = inputvalue.value;

        value.setAttribute("id", count)
       
        //console.log(value.attributes[0].value);
        //firebase.database().ref('todolist/'+value.attributes[0].value).set({"item":value.innerHTML});
        count++;
        
        value.appendChild(editButton);
        value.appendChild(deleteButton);
        todoitem.appendChild(value);


    }
    inputvalue.value = null;



}
function deleteItem() {
    todoitem.innerHTML = null;
}