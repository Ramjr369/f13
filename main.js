


document.getElementById('change1').addEventListener('click',codefunl);
function codefunl(){
    
    
    var xhr=new XMLHttpRequest();
    xhr.open('GET','painting.html',true);
    xhr.onload=function()
    {
        if(this.status==200)
        {
            
            
            document.getElementsByTagName('body')[0].innerHTML=this.responseText;
        }
        else{
            console.log("error occured");
        }
    }
    xhr.send();
};

document.getElementById('change2').addEventListener('click',codefun2);
function codefun2(){
    
    
    var xhr=new XMLHttpRequest();
    xhr.open('GET','dancing.html',true);
    xhr.onload=function()
    {
        if(this.status==200)
        {
            
            
            document.getElementsByTagName('body')[0].innerHTML=this.responseText;
        }
        else{
            console.log("error occured");
        }
    }
    xhr.send();
};

document.getElementById('change3').addEventListener('click',codefun3);
function codefun3(){
    
    
    var xhr=new XMLHttpRequest();
    xhr.open('GET','speaking.html',true);
    xhr.onload=function()
    {
        if(this.status==200)
        {
            
            
            document.getElementsByTagName('body')[0].innerHTML=this.responseText;
        }
        else{
            console.log("error occured");
        }
    }
    xhr.send();
};

document.getElementById('change4').addEventListener('click',codefun4);
function codefun4(){
    
    
    var xhr=new XMLHttpRequest();
    xhr.open('GET','writing.html',true);
    xhr.onload=function()
    {
        if(this.status==200)
        {
            
            
            document.getElementsByTagName('body')[0].innerHTML=this.responseText;
        }
        else{
            console.log("error occured");
        }
    }
    xhr.send();
};


