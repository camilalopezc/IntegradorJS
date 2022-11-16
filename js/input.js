function totalAPagar(cantidad, categoria){
    let total;
    total = 0;
    if(categoria == 'Estudiante'){
        total = cantidad * (200-(80*200/100))
    }else if(categoria == 'Trainee'){
        total = cantidad * (200-(50*200/100))
    }else if(categoria == 'Junior'){
        total = cantidad * (200-(15*200/100))   
    }
    return total;
}
