import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

var swiper = new Swiper(".swiper", {
    // 創建一個輪播
    autoplay: {
        // 自動輪播 swiper
        delay: 2 * 1000, // 每兩秒切換下一張
    },
    loop: true, // 輪播結束後回到第一張繼續輪播
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        // 前一張、下一張按鈕
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
