const Cantidad = document.getElementById("cantidad");
const Categoria = document.getElementById("categoria");

const SendButton = document.getElementById("send-button");
SendButton.addEventListener("click", totalAPagar);

selectElement.addEventListener("change", showTotal);

function totalAPagar(Cantidad, Categoria){
    let total;
    total = 0;
    if(Categoria == 'Estudiante'){
        total = Cantidad * (200-(80*200/100))
    }else if(Categoria == 'Trainee'){
        total = Cantidad * (200-(50*200/100))
    }else if(Categoria == 'Junior'){
        total = Cantidad * (200-(15*200/100))   
    }else{
        total = Cantidad * 200
    }
    return total;    
}

function showTotal(){
    if(selectElement.value){
        
    }
    const element = document.createElement("div");
    element.className("card");
    element.innerHTML = '<p><strong>Total a pagar:$ {producto.getTotal()}</strong></p>';

    container.appendChild(element);
}
