var resbutton = document.getElementById(Resbut);
var PSAdatabaseref = firebase.database().ref().child("Availability of Parking Space A");
var PSBdatabaseref = firebase.database().ref().child("Availability of Parking Space B");
    var parkspace = document.getElementById("space").value;
    PSAdatabaseref.on('value', function(datasnapshot){
    parkspace = datasnapshot.val();
});
function Reservebut(){
    var firebaseref = firebase.database().ref();
    if (parkspace=="Free"){
        window.alert("There are no spaces left in this park");
    }
    firebaseref.push().set(parkspace)
}