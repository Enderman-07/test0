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
    var jsonData = JSON.parse(data);

    var container1 = document.getElementById('parameter1');
    var phone = getURL()
    var p1 = document.getElementById('phone1');
    p1.innerHTML = phone;
    container1.innerHTML = phone;
    for (let i = 0; i < jsonData.length; ++i) {
        if (jsonData[i]["机型"] == phone) {
            container1.innerHTML =  '<br>CPU型号:' + jsonData[i]['CPU型号']
                + '<br>内存:' + jsonData[i]['内存']
                + '<br>机身颜色:' + jsonData[i]['机身颜色']
                + '<br>是否支持IPv6:' + jsonData[i]['支持IPv6']
                + '<br>屏幕材质:' + jsonData[i]['屏幕材质']
                + '<br>特质:' + jsonData[i]['特征特质'] + ';' + jsonData[i]['网络支持.5G网络']
                + '<br>屏幕分辨率:' + jsonData[i]['屏幕分辨率']
                + '<br>基本信息:' + jsonData[i]['基本信息.机身尺寸'] + ';' + jsonData[i]['基本信息.机身重量']
                + '<br>屏幕:' + jsonData[i]['屏幕.屏幕尺寸'] + ';' + jsonData[i]['屏幕.屏幕刷新率']
                + '<br>电池:' + jsonData[i]['电池信息.充电功率'] + ';' + jsonData[i]['电池信息.电池容量']
                + '<br>操作系统:' + jsonData[i]['操作系统.系统']
                + '<br>网络:' + jsonData[i]['网络支持.5G网络'] + ';' + jsonData[i]['网络支持.SIM卡类型'] + ';' + jsonData[i]['网络支持.双卡机类型']
                + '<br>摄像头: 前摄' + jsonData[i]['前摄主像素'] + ';后摄' + jsonData[i]['后摄主像素'] + '/' + jsonData[i]['后摄2-超广角像素'] + '/' + jsonData[i]['后摄3-tele像素'];
            break;
        }
    }
    var container2 = document.getElementById("parameter2");
    var phone2 = document.getElementById("phones").value;
    var p2 = document.getElementById('phone2');
    p2.innerHTML = phone2;
    container2.innerHTML = phone2;
    for (let i = 0; i < jsonData.length; ++i) {
        if (jsonData[i]["机型"] == phone2) {'<br>CPU型号:' + jsonData[i]['CPU型号']
            + '<br>内存:' + jsonData[i]['内存']
            + '<br>机身颜色:' + jsonData[i]['机身颜色']
            + '<br>是否支持IPv6:' + jsonData[i]['支持IPv6']
            + '<br>屏幕材质:' + jsonData[i]['屏幕材质']
            + '<br>特质:' + jsonData[i]['特征特质'] + ';' + jsonData[i]['网络支持.5G网络']
            + '<br>屏幕分辨率:' + jsonData[i]['屏幕分辨率']
            + '<br>基本信息:' + jsonData[i]['基本信息.机身尺寸'] + ';' + jsonData[i]['基本信息.机身重量']
            + '<br>屏幕:' + jsonData[i]['屏幕.屏幕尺寸'] + ';' + jsonData[i]['屏幕.屏幕刷新率']
            + '<br>电池:' + jsonData[i]['电池信息.充电功率'] + ';' + jsonData[i]['电池信息.电池容量']
            + '<br>操作系统:' + jsonData[i]['操作系统.系统']
            + '<br>网络:' + jsonData[i]['网络支持.5G网络'] + ';' + jsonData[i]['网络支持.SIM卡类型'] + ';' + jsonData[i]['网络支持.双卡机类型']
            + '<br>摄像头: 前摄' + jsonData[i]['前摄主像素'] + ';后摄' + jsonData[i]['后摄主像素'] + '/' + jsonData[i]['后摄2-超广角像素'] + '/' + jsonData[i]['后摄3-tele像素'];
            break;
        }
    }
}


function change_opt(data) {
    var jsonData = JSON.parse(data);
    var select = document.getElementById('phones');  
    while (select.options.length > 1) { 
        select.remove(1); // 移除除空白项外的第一个选项  
    }
    // 遍历API返回的选项列表，并添加到select元素中  
    jsonData.forEach(option => {
        let opt = document.createElement('option');
        opt.value = option['机型'];
        opt.text = option['机型'];
        document.getElementById('phones').appendChild(opt);
    });
}




function goToPage2(event) {
    event.preventDefault(); // 阻止默认的链接跳转行为  
    var value = document.getElementById("phones").value;
    var url = 'index2.html?value=' + encodeURIComponent(value);
    window.open(url, '_blank'); // 在新标签页中打开URL  
}


function getURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var value = urlParams.get('value');
    if (value) {
        return value;
    }
    return null;
}