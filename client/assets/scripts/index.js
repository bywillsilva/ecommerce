const Data = new Date();
const Dia = Data.getDate();
const DiaSemana = Data.getDay();
const Mes = Data.getMonth() + 1;

let mes;
let diaSemana;
const setData = document.getElementById("data-atual");

if (Mes == 1) {
    mes = "Janeiro";
} else if (Mes == 2) {
    mes = "Fevereiro";
} else if (Mes == 3) {
    mes = "Março";
} else if (Mes == 4) {
    mes = "Abril";
} else if (Mes == 5) {
    mes = "Maio";
} else if (Mes == 6) {
    mes = "Junho";
} else if (Mes == 7) {
    mes = "Julho";
} else if (Mes == 8) {
    mes = "Agosto";
} else if (Mes == 9) {
    mes = "Setembro";
} else if (Mes == 10) {
    mes = "Outubro";
} else if (Mes == 11) {
    mes = "Novembro";
} else {
    mes = "Dezembro";
}

if (DiaSemana == 1) {
    diaSemana = "Segunda";
} else if (DiaSemana == 2) {
    diaSemana = "Terça";
} else if (DiaSemana == 3) {
    diaSemana = "Quarta";
} else if (DiaSemana == 4) {
    diaSemana = "Quinta";
} else if (DiaSemana == 5) {
    diaSemana = "Sexta";
} else if (DiaSemana == 6) {
    diaSemana = "Sábado";
} else {
    diaSemana = "Domingo"
}
 
setData.innerText = `${diaSemana}, ${Dia} de ${mes}`;