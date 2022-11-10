'use strict';

function search() {
    if (document.querySelector(".search").value != "") {
        window.location.href = "https://cn.bing.com/search?q=" + document.querySelector(".search").value;
        document.querySelector(".search").value = "";
    }
    return false;
}
