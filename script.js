function valorfinal(){
    var total;
    var checkboxes = document.querySelectorAll('.checkbox');
    var som;
    checkboxes.forEach(function(el) {
        if(el.checked){
            som++;
        }
    })
    total=(parseInt(document.getElementsByName('tamanho').value))+(som*3);
    console.log(total);
    console.log(document.getElementsByName('tamanho'));
    console.log("teste");
}

