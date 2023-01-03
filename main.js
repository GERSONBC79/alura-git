
function getTexto(){
    var txt = document.getElementById('input').value.toLowerCase();
    document.getElementById('muneco').style.display = 'none';/*muñeco coulto */
    document.getElementById('msg1').style.display = 'none';
    document.getElementById('msg2').style.display = 'none';
    document.getElementById('copiar').style.display = 'block';
    document.getElementById('txt').style.display = 'block';
    
    var array = txt.split('');

    for (let i = 0; i < array.length; i++) {
       if(array[i] === 'a'){
        array[i] = 'ai';
       } else if ( array[i] === 'e'){
        array[i] = 'enter'
       } else if ( array[i] === 'i'){
        array[i] = 'imes';
       } else if( array[i] === 'o'){
        array[i] = 'ober'
       } else if( array[i] === 'u'){
        array[i] = 'ufat';
       }
    }

    var nuevaP = array.join('');
    document.getElementById('txt').innerHTML = nuevaP;
}