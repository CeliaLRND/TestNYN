$(document).ready(function() {

$('#gallery-icon-1,#gallery-link-1').on('click', function() {
 
    $(this).lightGallery({
        dynamic: true,
        download: false,
        counter: false,
        dynamicEl: [{
            'src': './img/proj02-3.jpg',
            
            }, {
            'src': './img/proj02-4.jpg',
            
            }, {
            'src': './img/proj02-5.jpg',
            
            }]
    })
 
});

$('#gallery-icon-2,#gallery-link-2').on('click', function() {
 
    $(this).lightGallery({
        dynamic: true,
        download: false,
        counter: false,
        dynamicEl: [{
            'src': './img/proj02-3.jpg',
            
            }, {
            'src': './img/proj02-4.jpg',
            
            }, {
            'src': './img/proj02-5.jpg',
            
            }]
    })
 
});

$('#gallery-icon-3,#gallery-link-3').on('click', function() {
 
    $(this).lightGallery({
        dynamic: true,
        download: false,
        counter: false,
        dynamicEl: [{
            'src': './img/proj02-3.jpg',
            
            }, {
            'src': './img/proj02-4.jpg',
            
            }, {
            'src': './img/proj02-5.jpg',
            
            }]
    })
 
});

});
