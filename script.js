const buttonYes = document.querySelector('.btnYes');
const buttonNo = document.querySelector('.btnNo');
const title = document.querySelector('.title');

buttonYes.addEventListener('click', () => {
    title.textContent = "Я так и знал.";
});

buttonNo.addEventListener('mouseover', () => {
    var minTop = 0;
    var maxTop = 40;
    var resTop = Math.round(minTop + Math.random() * (maxTop - minTop));

    var minLeft = 0;
    var maxLeft = 80;
    var resLeft = Math.round(minLeft + Math.random() * (maxLeft - minLeft));
    buttonNo.style.cssText = `position: absolute; top:${resTop}%; left:${resLeft}%`;
});