document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){ // verifica se o usuário digitou algo
        alert("Please Enter a Task") 
    }

    else{ // adiciona o valor que o usuário escreveu ao conteudo do #tasks
        document.querySelector('#tasks').innerHTML += `  
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <span class="delete"> 
                    <p class="">x</p>
                </span>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
