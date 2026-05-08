const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahToDo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function (){

    if(inputValue.value === ""){
        alert("input tidak boleh kosong");
        return;
    }

    const listbaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru)


    inputValue.value ="";

});