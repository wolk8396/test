const tellMeTime = document.querySelector('samp'); 

const creatTime = () => {
    const  creatDate = new Date();
    let creatHours = creatDate.getHours();
    let minutes = creatDate.getMinutes();
    let second = creatDate.getSeconds();
    
    creatHours < 10 ? '0'+ creatDate.getHours() : creatDate.getHours();
    minutes < 10 ? '0'+ creatDate.getMinutes() : creatDate.getMinutes();
    second < 10 ? '0'+ creatDate.getSeconds() : creatDate.getSeconds();

    tellMeTime.innerHTML = `${creatHours}:${ minutes}:${second}`

}
setInterval(creatTime, 1000)
