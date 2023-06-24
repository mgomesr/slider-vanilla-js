lastIndex = 0;
var imagens = document.querySelectorAll('.container img');

imagens.forEach((item,index)=>{
    document.querySelectorAll('.bullet-single')[index]
    .addEventListener('click', ()=>{
        let lastImage = document.querySelectorAll('.container img')[lastIndex];
        let actualImage = document.querySelectorAll('.container img')[index];

        document.querySelectorAll('.bullet-single')[lastIndex]
        .classList.remove('active-bullet');
        document.querySelectorAll('.bullet-single')[index]
        .classList.add('active-bullet');

        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;
        lastIndex = index;
    });
    
});