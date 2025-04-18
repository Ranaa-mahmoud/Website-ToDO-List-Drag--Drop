allBoxes=document.querySelectorAll('.box');
allTasks=document.querySelectorAll('.task');
allTasks.forEach(task =>{
    task.addEventListener('dragstart',()=>{
        task.classList.add('is-dragging');
    });
    task.addEventListener('dragend',()=>{
        task.classList.remove('is-dragging');
    });

});
allBoxes.forEach(box =>{
    box.addEventListener('dragover',(e)=>{
        e.preventDefault();
        const draggingTask=document.querySelector('.is-dragging');
        box.appendChild(draggingTask);
    });
    
});

const form=document.querySelector('#add-form');
const input=document.querySelector('#todo-input');
const todoList=document.querySelector('#todo');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Task=input.value.trim();
    if(!Task) return;
    const newTask=document.createElement('p');
    newTask.classList.add('task');
    newTask.setAttribute('draggable','true');
    newTask.innerText=input.value;
    todoList.appendChild(newTask);
    
    newTask.addEventListener('dragstart',()=>{
        newTask.classList.add('is-dragging');
    
    });
    newTask.addEventListener('dragend',()=>{
        newTask.classList.remove('is-dragging');
    }); 
    input.value='';
})