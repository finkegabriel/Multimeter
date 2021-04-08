var url = 'http://www.api.POWERWALLDOMAIN.com';

function getAjax(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

// example request
console.log(getAjax(url, function(data) {
    console.log(JSON.parse(data).data)
}));

function setData(value) {
    var s = document.getElementById(value);
    getAjax(url, function(data) {
        s.innerHTML = JSON.parse(data).data +" kW";
    });
};

setData("p0");
setData("p1");
setData("p2");
