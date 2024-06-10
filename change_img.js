//手机图片
function changeImage1() {
    var phone = document.getElementById("phones").value; // 获取下拉列表的值  
    var image = document.getElementById("PhoneImage"); // 获取图片元素  
    // 根据不同的值设置不同的图片  
    image.src = "./photo/" + phone + ".jpg";
    
}

//词云
function changeImage2() {
    var phone = document.getElementById("phones").value; // 获取下拉列表的值  
    var image = document.getElementById("text"); // 获取图片元素  
    image.src = "./word_cloud/" + phone + "/" + phone + "_keywords.png";
}
//情绪统计
function changeImage3() {
    var phone = document.getElementById("phones").value; // 获取下拉列表的值  
    var image = document.getElementById("text"); // 获取图片元素  
    image.src = "./word_cloud/" + phone + "/" + phone + "_emotion_analysis.png";
}

//好评差评统计
function changeImage4() {
    var phone = document.getElementById("phones").value; // 获取下拉列表的值  
    var image = document.getElementById("text"); // 获取图片元素  
    image.src = "./word_cloud/" + phone + "/" + phone + "_feedback.png";
}




