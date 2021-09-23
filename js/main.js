const header = document.getElementById('header')

if (slideShowOn) {
    var ii = 1;
    setInterval(() => {
        header.style.backgroundImage = "url(" + headerBG[ii]  + ")"
        ii++
        if (ii>2) ii = 0
    }, slideDuration);
} else {
    header.style.backgroundImage = "url(" + headerBGDef  + ")"
}
