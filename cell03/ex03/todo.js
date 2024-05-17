

document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
function addtodolist(){
    let inp = document.getElementById('inpu').value;
    document.getElementById('inpu').value = "";
    let panal = document.getElementById('ft-list');
    let newp = document.createElement('p');
    let newa = document.createElement('a');
    
    newp.innerHTML = inp;
    newa.appendChild(newp);
    panal.appendChild(newa);
    newa.addEventListener('click', deleteToDo);
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function deleteToDo() {
    this.remove();
}
