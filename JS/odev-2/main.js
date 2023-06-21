
    const TASK_INPUT = document.querySelector(`#task`);
    const TASK_LIST = document.querySelector(`#list`);
    const TASK_LIST_ALL = document.querySelectorAll(`#list li`);
    const BUTTON_DOM = document.querySelector(`#liveToastBtn`);
    const TOAST_SUCCESS = document.querySelector(`.toast.success`);
    const TOAST_ERROR = document.querySelector(`.toast.error`);
    

    const arrayTaskList = localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")): []


  
window.onload = function(){

    
    displayItems();

    
    TASK_INPUT.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        event.preventDefault();
        BUTTON_DOM.click();
        };
     });

};



function displayItems(){

    for(var i = 0; i < arrayTaskList.length; i++){
        
        
        var liNode = document.createElement(`li`);

        
        var liNodeTxt = document.createTextNode(arrayTaskList[i]);

        
        TASK_LIST.appendChild(liNode);

       
        liNode.appendChild(liNodeTxt);

        liNode.setAttribute(`onclick`,`addCheckedClass(event)`);

        var spanNode = document.createElement(`span`)

        liNode.appendChild(spanNode); 

        spanNode.innerHTML= "&times;";// delete button icon
        
        spanNode.setAttribute(`class`,`close`);

        spanNode.setAttribute(`onclick`,`deleteElement(event)`);

        }
};
    
function newElement(){

    if(TASK_INPUT.value == null || TASK_INPUT.value.trim() =='' ){

        $(TOAST_ERROR).toast(`show`);

        TOAST_ERROR.classList.add(`bg-danger`,`text-light`)     
        
        
         TASK_INPUT.value = ``;
    }else{
        
       arrayTaskList.push(TASK_INPUT.value);

      
       localStorage.setItem(`Tasks`, JSON.stringify(arrayTaskList))

        
        var liNode = document.createElement(`li`);

        
        var liNodeTxt = document.createTextNode(TASK_INPUT.value);

        
        TASK_LIST.appendChild(liNode);

        
        liNode.appendChild(liNodeTxt);

        
        liNode.setAttribute(`onclick`,`addCheckedClass(event)`);
        
        
        var spanNode = document.createElement(`span`)

        
        liNode.appendChild(spanNode); 

        
        spanNode.innerHTML= "&times;";

         
        spanNode.setAttribute(`class`,`close`);

        
        spanNode.setAttribute(`onclick`,`deleteElement(event)`);


        
        $(TOAST_SUCCESS).toast(`show`);

        
        TOAST_SUCCESS.classList.add(`bg-success`, `text-light`)    

        
        TASK_INPUT.value = ``;
    }
    
    
    };

    
function deleteElement(event){

     
    let node = event.target; 

    
    let arrayIndexOfNodeValue = arrayTaskList.indexOf(node.parentNode.childNodes[0].nodeValue);

     
    arrayTaskList.splice(arrayIndexOfNodeValue, 1);

    
    localStorage.setItem(`Tasks`,JSON.stringify(arrayTaskList));

    
    node.parentNode.remove();   
};




    function addCheckedClass(event){
        
        let node = event.target;
        
        node.classList.toggle(`checked`);
    };
