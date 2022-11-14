function totalAPagar(int cantidad, string categoria){
    float total;
    if(categoria == 'Estudiante'){
        total = cantidad * (200-(80*200/100))
    }elseif(categoria == 'Trainee'){
        total = cantidad * (200-(50*200/100))    
    }elseif(categoria == 'Junior'){
        total = cantidad * (200-(15*200/100))    
    }
}
