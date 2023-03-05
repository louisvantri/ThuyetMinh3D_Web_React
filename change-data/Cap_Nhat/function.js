
function showData(){
    dataEL=document.getElementById("data");
    let addMovie=document.getElementById("addMovie");
    if(addMovie.style.display!="none"){
        addMovie.style.display="none"
    }
    let addEpisode=document.getElementById("addEpisode");
    if(addEpisode.style.display!="none"){
        addEpisode.style.display="none";
    }
    if(dataEL.innerHTML==``)
    {
        console.log("show data");
        dataEL.innerHTML+="[<br/>"
        for(let i=0;i<data.length;i++){
            dataEL.innerHTML+="&#9;&#9;&#9;&#9;{<br/>"
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;"name":"${data[i].name}",<br/>`;
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;"avatar":"${data[i].avatar}",<br/>`;
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;"numberEnd":${data[i].numberEnd},<br/>`;
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;"id":${data[i].id},<br/>`;
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;"categories":"${data[i].categories}",<br/>`;
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;"dimensional":"${data[i].dimensional}",<br/>`;    
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;"lich_chieu":"${data[i].lich_chieu}",<br/>`;        
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;"nam_sx":"${data[i].nam_sx}",<br/>`;
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;"videos":[<br/>`;
            
            for(let j=0;j<data[i].videos.length;j++){
                if(j<data[i].videos.length-1) dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;{"name":"${data[i].videos[j].name}","value":"${data[i].videos[j].value}"},<br/>`;
                else dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;{"name":"${data[i].videos[j].name}","value":"${data[i].videos[j].value}"}<br/>`;
            }
            dataEL.innerHTML+=`&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;]<br/>`;

            if(i<data.length-1) dataEL.innerHTML+="&#9;&#9;&#9;&#9;},<br/>"
            else dataEL.innerHTML+="&#9;&#9;&#9;&#9;}<br/>"
        }
        dataEL.innerHTML+="]<br/>"
    }
    
}

function hideData(){
    dataEL=document.getElementById("data");
    if(dataEL.innerHTML!=``)
    {
        console.log("hide data");
        dataEL.innerHTML=``;
    }
}

function copyText__function() {
    // Get the text field
    let copyText = document.getElementById("data");
  
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.innerText);
}

function show_addMovie__function(){
    let addMovie=document.getElementById("addMovie");
    dataEL=document.getElementById("data");
    if(dataEL.innerHTML!=``)
    {
        console.log("hide data");
        dataEL.innerHTML=``;
    }
    if(addMovie.style.display=="none"){
        addMovie.style.display="block";
    }
    else {
        addMovie.style.display="none"
    }
    let addEpisode=document.getElementById("addEpisode");
    if(addEpisode.style.display!="none"){
        addEpisode.style.display="none";
    }

}

function addMovie__function(){
    let addMovie__Name=document.getElementById("addMovie__Name");
    let addMovie__Avatar=document.getElementById("addMovie__Avatar");
    let addMovie__categories=document.getElementById("addMovie__categories");
    let addMovie__dimensional=document.getElementById("addMovie__dimensional");
    let addMovie__lich_film=document.getElementById("addMovie__lich_film");
    let addMovie__nam_sx=document.getElementById("addMovie__nam_sx");
    if(addMovie__Name.value!=""){
        for(let i=0;i<data.length;i++)
        {
            if(data[i].name.toLowerCase()==addMovie__Name.value.toLowerCase()){
                alert("Tên phim đã tồn tại. Xin kiểm tra lại!");
                addMovie__Name.focus();
                return;
            }
        }
        console.log("Tên phim thông qua!");
    }
    else{
        alert("Vui lòng điền tên phim");
        addMovie__Name.focus();
        return;
    }
    if(addMovie__Avatar.value!=""){
        if(addMovie__Avatar.value.toLowerCase().includes('https'))
        {
            if(addMovie__Avatar.value.toLowerCase().includes('.jpg') ||addMovie__Avatar.value.toLowerCase().includes('.png'))
            {
                console.log("Avatar thông qua!");
            }
            else{
                alert("Link avatar sai!");
                addMovie__Avatar.focus();
                return;
            }
        }
        else{
            alert("Link avatar sai!");
            addMovie__Avatar.focus();
            return;
        }
    }
    else{
        alert("Link avatar sai!");
        addMovie__Avatar.focus();
        return;
    }
    if(addMovie__dimensional.value!=""){
        if(addMovie__dimensional.value!="3D" && addMovie__dimensional.value!="2D"){
            alert("Dimensional sai!");
            addMovie__dimensional.focus();
            return;
        }
        else{
            console.log("dimensional thong qua!");
        }
    }
    else{
        alert("Dimensional  sai!");
        addMovie__dimensional.focus();
        return;
    }
    if(addMovie__lich_film.value==""){
        alert("Lich Phim  sai!");
        addMovie__dimensional.focus();
        return;
    }
    if(addMovie__nam_sx.value=""){
        alert("Nam SX  fail!");
        addMovie__dimensional.focus();
        return;
    }
    data.push({
        "name":`"${addMovie__Name.value}"`,
        "avatar":`"${addMovie__Avatar.value}"`,
        "numberEnd":1000,
        "id":`"${data.length+1}"`,
        "categories":`"${addMovie__categories.value}"`,
        "dimensional":`"${addMovie__dimensional.value}"`,
        "lich_chieu":`"${addMovie__lich_film.value}"`,
        "nam_sx":`"${addMovie__nam_sx.value}"`,
        "videos":[]
    })
    alert("Đã Thêm Phim"+data[data.length-1]);
}

function show_addEpisode__function(){
    let addMovie=document.getElementById("addMovie");
    let dataEL=document.getElementById("data");
    if(dataEL.innerHTML!=``)
    {
        console.log("hide data");
        dataEL.innerHTML=``;
    }
    if(addMovie.style.display!="none"){
        addMovie.style.display="none"
    }
    let addEpisode=document.getElementById("addEpisode");
    if(addEpisode.style.display=="none"){
        addEpisode.style.display="block";
    }
    else{
        addEpisode.style.display="none";
    }
    let addEpisode__NameMovie=document.getElementById("addEpisode__NameMovie");
    let check_nameMovie=document.getElementById("check_nameMovie");
    let tempMovie={};
    addEpisode__NameMovie.oninput=function(){
        console.log("change");
        for(let i=0;i<data.length;i++)
        {
            if(data[i].name.toLowerCase()==addEpisode__NameMovie.value.toLowerCase()){
                tempMovie=data[i];
                check_nameMovie.innerHTML="Tập Đầu: "+data[i].videos[0]?.name+"<br/>"+"Tập Cuối: "+data[i].videos[data[i].videos.length-1]?.name;
                check_nameMovie.style.color="green";
                addEpisode__NameMovie.style.border="2px solid green";
                addEpisode__NameMovie.style.color="green";
                return;
            }

        }
        check_nameMovie.innerHTML="Chưa tìm thấy tên phim";
        check_nameMovie.style.color="red";
        addEpisode__NameMovie.style.color="red";
        addEpisode__NameMovie.style.border="2px solid red ";
    }
    let addEpisode__Name=document.getElementById("addEpisode__Name");
    let check_nameEpisode=document.getElementById("check_nameEpisode");
    addEpisode__Name.oninput=function()
    {
        if(addEpisode__Name.value!=""){
            check_nameEpisode.innerHTML=addEpisode__Name.value;
            for(let i=0;i<data.length;i++)
            {
                if(data[i].name.toLowerCase()==addEpisode__NameMovie.value.toLowerCase())
                {
                    for(let j=0;j<data[i].videos.length;j++)
                    {
                        let item=data[i].videos[j];
                        if(item.name.toLowerCase()==addEpisode__Name.value.toLowerCase())
                        {
                            check_nameEpisode.style.color="red";
                            addEpisode__Name.style.color="red";
                            addEpisode__Name.style.border="2px solid red";
                            return;
                        }
                        check_nameEpisode.style.color="green";
                        addEpisode__Name.style.color="green";
                        addEpisode__Name.style.border="2px solid green";
                    }
                    return;
                }
            }
        }
        else{
            check_nameEpisode.innerHTML="Check Tên Tập";
            check_nameEpisode.style.color="red";
            addEpisode__Name.style.border="2px solid red";
        }
        
    }
    let addEpisode__Link=document.getElementById("addEpisode__Link");
    addEpisode__Link.oninput=function(){
        if(addEpisode__Link.value.includes("https"))
        {
            if(addEpisode__Link.value.includes("embed"))
            {
                addEpisode__Link.style.color="green";
                addEpisode__Link.style.border="2px solid green";
            }
            else
            {
                addEpisode__Link.style.color="red";
                addEpisode__Link.style.border="2px solid red";
            }
        }
        else{
            addEpisode__Link.style.color="red";
            addEpisode__Link.style.border="2px solid red";
        }
    }
}

function soSanh(a, b){
    a=a.split("-")[0];
    b=b.split("-")[0];
    if(a>b) return 1;
    return -1;
}
function addEpisode__function(){
    let addEpisode__NameMovie=document.getElementById("addEpisode__NameMovie");
    let addEpisode__Name=document.getElementById("addEpisode__Name");
    let addEpisode__Link=document.getElementById("addEpisode__Link");
    if(addEpisode__NameMovie.style.color=="green" && addEpisode__Name.style.color=="green" && addEpisode__Link.style.color=="green")
    {
        let tempEp={"name":`${addEpisode__Name.value}`,"value":`${addEpisode__Link.value}`};
        for(let i=0;i<data.length;i++)
        {
            if(data[i].name.toLowerCase()==addEpisode__NameMovie.value.toLowerCase())
            {
                data[i].videos.push(tempEp);
                for(let j=0;j<data[i].videos.length;j++)
                {
                    if(soSanh(tempEp.name,data[i].videos[j].name)==-1)
                    {
                        for(let k=data[i].videos.length-1;k>j;k--)
                        {
                            data[i].videos[k]=data[i].videos[k-1];
                        }
                        data[i].videos[j]=tempEp;
                        break;
                    }
                }
                if(tempEp==data[i].videos[data[i].videos.length-1])
                {
                    let tempMv=data[i];
                    for(let j=i;j>0;j--)
                    {
                        data[j]=data[j-1];
                    }
                    data[0]=tempMv;
                }
            }
        }
        addEpisode__NameMovie.value="";
        addEpisode__Name.value="";
        addEpisode__Link.value="";
        alert("Đã thêm tập phim");
        document.getElementsByClassName("showdata")[0].click();
    }
    
    
}


