
document.getElementById('redBtn').addEventListener("mousedown" , mouseDown);
document.getElementById('redBtn').addEventListener('mouseup' , mouseUp);
    
    function mouseDown() {
        document.getElementById('redBtn').setAttribute(
            "style", "background-color: #ff0000;  border: solid 3px #330000; border: solid 3px hsla(0,0%,5%,.8); box-shadow: inset hsla(0,0%,15%,  .6) 0  0px 25px 30px, inset hsla(0,100%,20%, .8) 0 -1px 5px 4px, inset hsla(0,100%,60%, .25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0  2px 1px 7px,  hsla(0,100%, 80%,.2) 0 -5px 15px 14px, hsla(0,100%,80%,.5) 0px  0px 6px 4px;")
        
}

function mouseUp() {
    document.getElementById('redBtn').setAttribute( "style", "");
}