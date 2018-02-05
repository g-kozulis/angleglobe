var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.js');
document.body.appendChild(jQueryScript);
    
// Only executed our code once the DOM is ready.
function render_all() {
    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    //Draw globe
    drawCircle(getAngle());
    // Draw the view now:
    paper.view.draw();
}

function toRad(deg) {
return deg * Math.PI / 180
}

function toDeg(rad) {
    return rad / (Math.PI / 180)
}

function getAngle() {
    var latA = parseFloat(document.getElementById("latA").value);
    var lonA = parseFloat(document.getElementById("lonA").value);
    var latB = parseFloat(document.getElementById("latB").value);
    var lonB = parseFloat(document.getElementById("lonB").value);
    const cos = Math.cos(toRad(latA))*Math.cos(toRad(latB))*Math.cos(toRad(lonB-lonA))+Math.sin(toRad(latA))*Math.sin(toRad(latB)); 
    return toDeg(Math.acos(cos))
}

function drawCircle(angle){
    //Define points
    var point1 = new paper.Point(300, 200);
    var point2 = new paper.Point(300, 300);
    //Draw circle
    var myCircle = new paper.Path.Circle(point2, 100);
    myCircle.strokeColor = 'black';
    //Draw line to the center of the circle
    var myPath = new paper.Path();
    myPath.strokeColor = 'black';
    myPath.add(new paper.Point(300, 200));
    myPath.add(new paper.Point(300, 300));
    //Group previous elements
    var group = new paper.Group([myCircle, myPath]);
    //Rotate the grouped elements
    group.rotate(angle);
    //Draw a line back to the starting point
    myPath.add(point1);
}