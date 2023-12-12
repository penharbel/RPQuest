function responsivo()
{
    let img = document.getElementById("back-image").style;
    img.width = window.innerWidth + "px";
    img.height = (window.innerHeight + 10) + "px";

    let forms = document.getElementById("form").style;
    forms.left = (window.innerWidth / 2) - 250 + "px";
    forms.top = (window.innerHeight / 2) - 250 + "px";
    
    requestAnimationFrame(responsivo);
}