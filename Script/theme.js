document.getElementById("theme").addEventListener("click",function(event){
    event.preventDefault();
    const body  = document.getElementById("body")
    if(body.classList.contains('bg-white')){
        body.classList.remove('bg-white')
        body.classList.add('bg-green-500')
    }else if(body.classList.contains('bg-green-500')){
        body.classList.remove('bg-green-500')
        body.classList.add('bg-orange-500')

    }
    else if(body.classList.contains('bg-orange-500')){
        body.classList.remove('bg-orange-500')
        body.classList.add('bg-yellow-300')

    }
    else if(body.classList.contains('bg-yellow-300')){
        body.classList.remove('bg-yellow-300')
        body.classList.add('bg-red-300')

    }
    else if(body.classList.contains('bg-red-300')){
        body.classList.remove('bg-red-300')
        body.classList.add('bg-white')

    }
})