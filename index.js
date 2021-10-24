function home()
{
    document.getElementById("about").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("home").style.display="block";
}
function about()
{
    document.getElementById("home").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("about").style.display="block";
}
function contact()
{
    document.getElementById("about").style.display="none";
    document.getElementById("home").style.display="none";
    document.getElementById("contact").style.display="block";

}