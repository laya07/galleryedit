function editImg()
{
    var blurVal=document.getElementById("blur").value
    var briVal=document.getElementById("brightness").value
    var conVal=document.getElementById("contrast").value
    var grayVal=document.getElementById("grayscale").value
    var hueVal=document.getElementById("hue").value
    var invVal=document.getElementById("invert").value
    var opaVal=document.getElementById("opacity").value
    var satVal=document.getElementById("saturate").value
    var sepiaVal=document.getElementById("sepia").value
    document.getElementById("image").style.filter=`blur(${blurVal}px) brightness(${briVal}%) contrast(${conVal}%) grayscale(${grayVal}%) hue-rotate(${hueVal}deg) invert(${invVal}%) opacity(${opaVal}%) saturate(${satVal}%) sepia(${sepiaVal}%)`
}
    
function rotateImg()
{
    var rotatezVal=document.getElementById("RotateZ").value 
    var rotatexVal=document.getElementById("RotateX").value 
    var rotateyVal=document.getElementById("RotateY").value 
    var scaleVal=document.getElementById("Scale").value 
    var scalexVal=document.getElementById("ScaleX").value 
    var scaleYVal=document.getElementById("ScaleY").value 
    var skewVal=document.getElementById("Skew").value 
    var skewxVal=document.getElementById("SkewX").value 
    var skewyVal=document.getElementById("SkewY").value 
    document.getElementById("image").style.rotate=`rotatez(${rotatezVal}deg)`


}
