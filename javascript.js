var cipo01 = 20.000
var cipo02 = 25.000
var cipo03 = 23.000

function kosarba (termek) {
    db = Number (prompt("Hány darabot szeretnél?"))
    localStorage.setItem (termek,db)
}

function torles () {
    localStorage.clear ()
}

function kosar () {
    var lista = ""
    var termek = localStorage.key(1)
    lista += "<tr> <th>Név</th> <th>Db</th> <th>Ár</th> </tr>"
    lista += "<tr> <td>"+termek+"</td> <td>1</td> <td>20.000</td> </tr>"
    document.getElementById ('table').innerHTML = lista
}
