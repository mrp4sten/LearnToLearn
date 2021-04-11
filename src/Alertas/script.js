//ejemplo básico
$("#btn1").click(function(){
    Swal.fire('Sabias que');
});	

$("#btn2").click(function(){
    Swal.fire('Establecer metas es el primer paso para convertir lo invisible en visible');
});	

//Con imagen de fondo
$("#btn3").click(function(){
    Swal.fire( 
        {
        imageUrl: 'https://media.giphy.com/media/Ie2hMaUTeAbg1yago1/giphy.gif',
        imageHeight: 412,
        imageAlt: 'A tall image'
        
        

        
    });
    


});	
