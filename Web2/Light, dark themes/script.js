let switchMode = document.getElementById("switch");

switchMode.onclick = function () {
    let theme = document.getElementById("dark");
    
    if (theme.getAttribute("href") == "lightstyle.css"){
        theme.href = "darkstyle.css";
    }
    else{
        theme.href = "lightstyle.css";
    }
}