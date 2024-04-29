
// Se a majoração alterar é so mudar os valores

function greal(){

let area = document.getElementById('area').value;
let carga = document.getElementById('carga').value;
let grau = document.getElementById('grau').value;
let nps = document.getElementById('nps').value;


carga = parseFloat(carga);
grau = parseFloat(grau);
area = parseFloat(area);

let cal = 0

if(!iqs.checked || !out.checked){ //Checklist 

    alert("Tem motivos de exclusão!")
        }else if(carga == -1 || grau == -1){

            alert ("Tens de selecionar a sua carga horaria e o seu grau de realização");
        }else{
if(area == 1){ //Dados do FOT FIBRA

    if(nps > 59){ 

        cal = (carga*grau/8)*2;
      
        console.log(carga);
      
      }else if (nps > 54){
          cal = (carga*grau/8)*1.5;
      
          console.log(carga);
      
      }else{
      
          cal = carga*grau/8;
      }


}else if (area == 2){ // Dados do VIT

    if(nps > 52){

        cal = (carga*grau/8)*2;
      
        console.log(carga);
      
      }else if (nps > 47){
          cal = (carga*grau/8)*1.5;
      
          console.log(carga);
      
      }else{
      
          cal = carga*grau/8;
      }

} else if (area == 3){ // Dados da PROV

    if(nps > 52){

        cal = (carga*grau/8)*2;
      
        console.log(carga);
      
      }else if (nps > 47){
          cal = (carga*grau/8)*1.5;
      
          console.log(carga);
      
      }else{
      
          cal = carga*grau/8;
      }

}else{

    alert("Tens de inserir a tua area de atendimento!")
}


document.getElementById('calculo').innerHTML = cal.toFixed(2)+"€"


}

}