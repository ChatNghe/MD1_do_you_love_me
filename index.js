function yes()
{
    alert("<3");
}
function no()
{
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('No').style.left = x + 'px';
    document.getElementById('No').style.top = y + 'px';
}