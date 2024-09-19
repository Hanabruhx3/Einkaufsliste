
                                                                                
let EinkaufslisteArray = []                                                     //Array zum Speichern der Listenelemente

window.onload=function(){
    loadList();                                                                 //Funktion zum laden der Liste aus localstorage
}
  

function addItem() {                                                            //Funktion zum Hinzufügen eines Items zur Liste
    var item= document.getElementById("myTextarea").value;                      //Text wird aus dem Feld geholt

    if (item.trim() !=="") {                                                    //Überprüfung ob das Feld leer ist
        EinkaufslisteArray.push(item);                                          //Text wird zur liste hinzugefügt
        saveList();                                                             //Liste in localStorage speichern
        displayList();                                                          //HTML-Anzeige der Liste wird aktualisiert
        document.getElementById("myTextarea").value = "";                       //Textarea leeren
    } else { 
        alert("Das Textfeld ist LEER! Bitte Artikel hinzufügen!");
    }
}


function displayList() {                                                        //Funktion zur Anzeige der Liste in HTML
    var Listenelement = document.getElementById("Einkaufsliste");               //Bereich der Liste leeren
    Listenelement.innerHTML = "";


    EinkaufslisteArray.forEach(function(item,index) {                           //Füge jedes Item als Listenelement hinzu
        var li = document.createElement("li");
            li.innerText = item;

        var removeButton = document.createElement("button");                    //Button zum entfernen des Items
            removeButton.innerText = "Löschen"
            removeButton.onclick = function() {
                removeItem(index);
            };

        li.appendChild(removeButton);
        Listenelement.appendChild(li)
    });
}


function removeItem(index) {                                                    //Funktion zum Entfernen eines Items
    EinkaufslisteArray.splice(index, 1);                                        //Entferne das Item aus dem Array
    saveList();                                        
    displayList();                                                              //Aktualisierung der Anzeige der Liste
}


function saveList() {
    localStorage.setItem('einkaufsliste', JSON.stringify(EinkaufslisteArray)); //Funktion zum Speichern der Liste
}


function loadList() {
    var einkaufsliste = localStorage.getItem('einkaufsliste')
    if(einkaufsliste)
    EinkaufslisteArray = JSON.parse(einkaufsliste);                                 // Liste aus localStorage ins Array laden
    displayList();                                                              //Liste wird angezeigt
}
    
    
document.getElementById("myTextarea").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addItem();
    }
});





