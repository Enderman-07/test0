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
    var container = document.getElementById('data-container');
    container.innerHTML = '内存:'+jsonData[0]['内存']+'<br>CPU型号:'+jsonData[0]['CPU型号'];
}

loadJSON(displayData);




    fetch('https://raw.githubusercontent.com/Enderman-07/5GPhoneEvaluation/main/output.json')  
     .then(response => response.json())  
     .then(data => {  
      // 在这里使用data对象...  
    // 清空select元素中的现有选项  
    document.getElementById('phones').innerHTML = '';  
  
    // 遍历API返回的选项列表，并添加到select元素中  
    data.forEach(option => {  
        let opt = document.createElement('option');  
        opt.value = option['机型'];  
        opt.text = option['机型'];  
        document.getElementById('phones').appendChild(opt);  
    });  
     })  
     .catch(error => {  
     // 处理错误  
     console.error('An error occurred:', error);  
     });



// function fetch_json() {  
//     return fetch('https://raw.githubusercontent.com/Enderman-07/5GPhoneEvaluation/main/output.json')
//         .then(response => {  
//             if (!response.ok) {  
//                 throw new Error('Network response was not ok');  
//             }  
//             return response.json();  
//         })  
//         .catch(error => {  
//             // 处理错误  
//             console.error('An error occurred:', error);  
//             throw error; // 重新抛出错误，以便调用者可以捕获它  
//         });  
// }  
  
// // 如何在另一个函数中使用它  
// function json_data(data) {  
//     // 清空select元素中的现有选项  
//     document.getElementById('phones').innerHTML = '';  
  
//     // 遍历API返回的选项列表，并添加到select元素中  
//     data.forEach(option => {  
//         let opt = document.createElement('option');  
//         opt.value = option.value;  
//         opt.text = option.text;  
//         document.getElementById('phones').appendChild(opt);  
//     });  
// }  

  
// // 使用.then()来处理Promise  
// fetch_json().then(data => {  
//     json_data(data);  
// }).catch(error => {  
//     // 捕获从phone_json()传递过来的错误  
//     console.error('Error in processing data:', error);  
// });  
