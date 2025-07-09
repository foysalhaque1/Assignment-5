document.getElementById("completed-btn-4").addEventListener("click",
    function (event) {
        event.preventDefault();
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours>=12?'PM' : 'AM';
        console.log(hours)

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
        alert(' Board Updated Successfully')
        const container = document.getElementById("activity-log");
        const div = document.createElement("div");
        const title = document.getElementById("title-4").innerText
        console.log(title);
        div.classList.add('bg-white', 'border', 'rounded-lg', 'm-[20px]', 'history');
        div.id = 'history-4'
        div.innerHTML = `
        <p class="p-2"> You have Complete The Task <span class="text-blue-500"> ${title}</span> at  ${hours}:${minutes}:${seconds} ${ampm}</p>
    
        
        
        `
        container.appendChild(div);
        const history1 = document.getElementById("history-1")
        const history2 = document.getElementById("history-2")
        const history3 = document.getElementById("history-3")
        const history4 = document.getElementById("history-4")
        const history5 = document.getElementById("history-5")
        const history6 = document.getElementById("history-6")

        if (history1 && history2 && history3 && history4 && history5 && history6) {
            return alert('Congrats!! You have completed all the current tasks')
        }


    })