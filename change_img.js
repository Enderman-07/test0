//手机图片
function changeImage1() {
    var phone = document.getElementById("phones").value; // 获取下拉列表的值  
    var image = document.getElementById("PhoneImage"); // 获取图片元素  
    image.src = "./photo/" + phone + ".jpg";
    // 根据不同的值设置不同的图片URL  
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




