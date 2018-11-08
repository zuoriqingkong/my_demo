
function cookieTools() {
    this.name = 'cookie';
    this.setCookie = function (key, val) {
        localStorage.setItem([key], val)
    }
};

cookieTools.prototype.getCookie = function(){
    return localStorage.getItem('name')
}
window.onload = function () {


}
console.dir(location)
let a = new cookieTools()
a.setCookie('name', 'Jim')
let b = localStorage.name
alert(b)


function clearStorge(){
    localStorage.clear();
}


function setDB(){
    var request, database;
    request = indexedDB.open("admin")
    request.onerror = function(event){
        alert(event.target.errorCode)
    }
    request.onsuccess = function () {
        console.log(event.target.result)
        database = event.target.result
    }
}
setDB();