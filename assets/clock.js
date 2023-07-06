setInterval(()=>{
     let d= new Date();
    let hr=d.getHours();
    let  min=d.getMinutes();
    let sec=d.getSeconds();
    let sec_rot=6*sec;
    let  min_rot=(6*min)+(sec/10);
    let hr_rot=(30*hr)+(min/2)+(sec/120);
    let hr_key=document.querySelector(".hours");
    let min_key=document.querySelector(".minutes");
    let sec_key=document.querySelector(".seconds");
    sec_key.style.rotate=`${sec_rot}deg`;
    min_key.style.rotate=`${min_rot}deg`;
    hr_key.style.rotate=`${hr_rot}deg`;
},1000)