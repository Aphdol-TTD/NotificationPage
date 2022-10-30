const notif=document.querySelectorAll('.notif');
notif.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.classList.add('read');
    } )
});
console.log(notif.length);
const nb=document.getElementById('nb');
c=notif.length;
nb.innerHTML=c;