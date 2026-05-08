const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahToDo");
const daftarTugas = document.getElementById("listTugas");
const inputTanggal = document.getElementById("inputTangal");

console.log("Input Tanggal berhasil diambil");
console.log(inputTanggal);

btnTambah.addEventListener("click", function (){

    if(inputValue.value === ""){
        alert("input tidak boleh kosong");
        return;
    }

    if(inputTanggal.value === ""){
        alert("Tanggal Tugas wajib di isi");
        return;
    }

    const listbaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru)


    inputValue.value ="";

});