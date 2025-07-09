document.getElementById("completed-btn-1").addEventListener("click",
    function(event){
        event.preventDefault();
        const now = new Date()
        
        const totalTasks = document.getElementById("total-tasks").innerText;
        console.log(totalTasks);
        const convertedTotalTasks = parseInt(totalTasks);
        this.disabled = true;

        const completedTasks = document.getElementById("completed-tasks").innerText;
        const convertedCompletedTasks = parseInt(completedTasks);
        const remainingTotalTasks = convertedTotalTasks - 1;
        const remainingTotalCompletedTasks = convertedCompletedTasks + 1;
        document.getElementById("total-tasks").innerText = remainingTotalTasks;
        document.getElementById("completed-tasks").innerText = remainingTotalCompletedTasks;
        alert('Task-1 is completed')
        const container = document.getElementById("activity-log");
        const div = document.createElement("div");
        const title = document.getElementById("title-1").innerText
        console.log(title);
        div.classList.add('bg-white','border','rounded-lg','m-[20px]','history');
        div.id = 'history-1'
        div.innerHTML = `
        <p class="p-2"> You have Complete The Task <span class="text-blue-500"> ${title}</span> at ${now}</p>
    
        
        
        `
        container.appendChild(div)
       

    })