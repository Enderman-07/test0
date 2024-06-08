//手机图片
function changeImage1() {  
    var phone = document.getElementById("phones").value; // 获取下拉列表的值  
    var image = document.getElementById("PhoneImage"); // 获取图片元素  
    //image.src = "./"+phone+".jpg";
    // 根据不同的值设置不同的图片URL  
    switch (phone) {  
        case "vivo iQOO Z9 Turbo":  
            image.src = "./temp2.png";  
            break;  
        case "vivo X100s":  
            image.src = "./temp3.jpg";  
            break;  
        case "AppleiPhone 15":  
            image.src = "./temp2.png";  
            break;  
        case "荣耀X50":  
            image.src = "./temp3.jpg";  
            break;  
        case "小米14":
            image.src = "./temp3.jpg";  
            break;
        case "华为Pura 70":  
            image.src = "./temp3.jpg";  
            break;  
        case "AppleiPhone 15 Pro Max":  
            image.src = "./temp2.png";  
            break;  
        case "vivoS17":  
            image.src = "./temp3.jpg";  
            break;  
        case "vivoS19":
            image.src = "./temp3.jpg";  
            break;
        case "OPPOFind X7 Ultra":
            image.src = "./temp3.jpg";  
            break;
        default:  
            image.src = "./temp1.jpg"; // 默认图片或者空图片  
    }  
}  
//优点词云
function changeImage2() {  
    var phone = document.getElementById("phones").value; // 获取下拉列表的值  
    var image = document.getElementById("text"); // 获取图片元素  

    // 根据不同的值设置不同的图片URL  
    switch (phone) {  
        case "volvo":  
            image.src = "./temp2.png";  
            break;  
        case "saab":  
            image.src = "./temp3.jpg";  
            break;  
        case "mercedes":  
            image.src = "./temp2.png";  
            break;  
        case "audi":  
            image.src = "./temp3.jpg";  
            break;  
        default:  
            image.src = "./temp2.jpg"; // 默认图片或者空图片  
    }  
}  
//缺点词云
function changeImage3() {  
    var phone = document.getElementById("phones").value; // 获取下拉列表的值  
    var image = document.getElementById("text"); // 获取图片元素  

    // 根据不同的值设置不同的图片URL  
    switch (phone) {  
        case "volvo":  
            image.src = "./temp2.png";  
            break;  
        case "saab":  
            image.src = "./temp3.jpg";  
            break;  
        case "mercedes":  
            image.src = "./temp2.png";  
            break;  
        case "audi":  
            image.src = "./temp3.jpg";  
            break;  
        default:  
            image.src = "./temp2.jpg"; // 默认图片或者空图片  
    }  
}  




