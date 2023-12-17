function aparecer(id){
    document.getElementById(`mostra_${id}`).classList.remove("hide")
    document.getElementById(`ve_${id}`).classList.add("hide")
}

function desaparecer(id){
    document.getElementById(`mostra_${id}`).classList.add("hide")
    document.getElementById(`ve_${id}`).classList.remove("hide")
}

function aparecerSemSumir(id){
    document.getElementById(`mostra_${id}`).classList.remove("hide")
}

function desaparecerSemSumir(id){
    document.getElementById(`mostra_${id}`).classList.add("hide")
}