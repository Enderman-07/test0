function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'output.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// 在页面上显示JSON数据
function displayData(data) {
    console.log("1");
    var jsonData = JSON.parse(data);
    var container1 = document.getElementById('parameter1');
    var phone = getcookie();
    for(let i=0;i<jsonData.length();++i){
        if(json[i]["机型"]==phone){
            container1.innerHTML = '内存:' + jsonData[i]['内存'] + '<br>CPU型号:' + jsonData[i]['CPU型号'];
            break;
        } 
    }
    var container2 = document.getElementById("parameter2");
    var phone2 = document.getElementById("phones").value;
    for(let i=0;i<jsonData.length();++i){
        if(json[i]["机型"]==phone2){
            container2.innerHTML = '内存:' + jsonData[i]['内存'] + '<br>CPU型号:' + jsonData[i]['CPU型号'];
            break;
        } 
    }
}


function change_opt(data) {
    var jsonData = JSON.parse(data);
    // 清空select元素中的现有选项  
    document.getElementById('phones').innerHTML = '';

    // 遍历API返回的选项列表，并添加到select元素中  
    jsonData.forEach(option => {
        let opt = document.createElement('option');
        opt.value = option['机型'];
        opt.text = option['机型'];
        document.getElementById('phones').appendChild(opt);
    });
}


function setCookie(name, value, days) {  
    var expires = "";  
    if (days) {  
        var date = new Date();  
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));  
        expires = "; expires=" + date.toUTCString();  
    }  
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";  
}  

function getCookie(name) {  
    var nameEQ = name + "=";  
    var ca = document.cookie.split(';');  
    for (var i = 0; i < ca.length; i++) {  
        var c = ca[i];  
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);  
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);  
    }  
    return null;  
}  
function setcookie() {  
    var name = document.getElementById('phones').value;
    setCookie("phone_name", name, 1)// 设置cookie名为phone_name，有效期为1天  
}  

function getcookie() {  
    var name = getCookie("phone_name");
    return name
} 