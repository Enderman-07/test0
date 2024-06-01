var global_day;
let global_nums1;
let global_nums2;

function getRandomDate(startDate, endDate) {  
    var start = startDate.getTime();  
    var end = endDate.getTime();  
    var random = Math.floor(Math.random() * (end - start)) + start;  //Math.random随机生成0-1的数
    var randomDate = new Date(random);  
    return randomDate;  
}  
  

function A(demo){
    var startdate = new Date(2000,1,1);
    var enddate = new Date(2024,5,9);
    date = getRandomDate(startdate,enddate);
    global_day=date;
    var year = date.getFullYear();  
    var month = date.getMonth() + 1;  
    var day = date.getDate(); 
    document.getElementById(demo).innerHTML=year+'-'+month+'-'+day;
}

function B(demo){
    var date = global_day;
    var year = date.getFullYear();  
    var month = date.getMonth() + 1;  
    var day = date.getDate(); 
    var weekday;
    switch(date.getDay()){
        case 0:
            weekday="星期日";
            break;
        case 1:
            weekday="星期一";
            break;
        case 2:
            weekday="星期二";
            break;
        case 3:
            weekday="星期三";
            break;
        case 4:
            weekday="星期四";
            break;
        case 5:
            weekday="星期五";
            break;
        case 6:
            weekday="星期六";
            break;
    }
    document.getElementById(demo).innerHTML=year + '年' + month + '月' + day + '日' + weekday;
}


function getRandomNum(min,max){
    let nums=[];
    for (let i=0;i<10;i++)
    { 
        let random = Math.floor(Math.random() * (max - min)) + min;
        nums.push(random);
    }
    return nums;
}

function C(demo){
    let nums1 = getRandomNum(0,100);
    let nums2 = getRandomNum(0,100);
    document.getElementById(demo).innerHTML='array1=['+nums1.join(',')+']   array2=['+nums2.join(',')+']';
    global_nums1=nums1;
    global_nums2=nums2;
}

function D(demo){
    let merge_arr=global_nums1.concat(global_nums2);
    merge_arr = merge_arr.sort(function(a,b){return a-b;});
    document.getElementById(demo).innerHTML='merge_array=['+merge_arr.join(',')+']';
}