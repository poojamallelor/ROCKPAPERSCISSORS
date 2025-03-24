let us=document.querySelector("#userscore");
let userscore=0;
let compscore=0;
let comscore=document.querySelector("#compscore");
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");//we have taken thi to chnage msg and score



showinner=(userwin,cid,compchoice)=>{//we have eddited score and text here id userwin consist true  the u win etc
    if(userwin){
        userscore++;
        us.innerText=userscore;
        console.log("you win");
        msg.innerText=`u win $`;
        msg.style.backgroundColor="blue";
    }else{compscore++;
        comscore.innerText=compscore;
        console.log(" OOPS you lose");
        msg.innerText="computer win";
        msg.style.backgroundColor="red";
        
       
    }
}

const gencompcho=()=>{// here we are  genrating comp choice option named array have been declard and using math.floor method we have genrTED a random index btw 0,1,2 by multi 3 we get no lesser than one any randoom no. then that we have stored in var and that used as index as that vari stores random no. can be used as index to get random choices
    const option=["rock","paper","scissors"];
    let a=Math.floor(Math.random()*3);
    
    return option[a];

}
drawGame =()=>{//  is both options are same same then this will op
    console.log("dame was draw");
    msg.innerText="game was draww";
    msg.style.backgroundColor="blue";

};

const playGame=(cid)=>{// 2 nd from here as we already genrated the choice of user by clicking the image so now conputer choice will be gnreating using gencomchoice method after that will have both choice so we have comperd that we havvvve assinged  1st uswe winn true by using if else and the ternayopetor we have decied game losser and winner to display it showwinnwe is called
    console.log("user choice =",cid);
    var compchoice=gencompcho();
    console.log("comp choice ",compchoice);
        let userwin=true;
        if(cid===compchoice){
        drawGame();

    }
    else{
        if(cid==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else{
            if(cid==="paper"){
                userwin=compchoice==="scissors"?false:true;
            }else{
                userwin=compchoice==="rock"?false:true;
            }
    

        }
    }
    showinner(userwin,cid,compchoice);
};

choices.forEach((choice)=>{// 1 st  we have taken three divs here using the loop and when we selest a div e.g rock or paper image then that time loop will run 1 st time rocks id will get stroed and passed next time papers id will be accesesd and that is possible by event listner and we have given task to event listenre  taht when click evnet will done on any image then acces the id and pass that id to play game method 

    console.log(choice);
    choice.addEventListener("click",()=>{
        var cid=choice.getAttribute("id");
        
        playGame(cid);

    });
});














































































































/*let a=document.querySelector("#p");
console.dir(a);
a.onclick= () =>{
    console.log("ASD0");
    v=2;
v++;
console.log(v);

}
a.addEventListener("click",()=>{
    console.log("fegt");
}


    count=0;
    for(const cha of s){
        if(cha==="a"||cha==="e"||cha==="i"||cha==="o"||cha==="u") count++;

    }
    console.log(count);

}
const arrowSum=(a,b)=>{
    console.log(a+b);
}
const arr=[2,3,4,5,6];
const sum=arr.reduce((a,b)=>{
return a+b;
}
)
console.log(sum);
a=[12,90,89,90,92,98,97];
let newToppers=a.filter((val)=>{
    return val>90;
})



let n = prompt("Enter your name:");
console.log(n);
let array=[];
for(i=1;i<n;i++){
   array[i-1]=i;

}
console.log(array);
const as=array.reduce((re,cu)=>{
    return re+cu;
})
console.log(as);
const s=array.reduce((re,cu)=>{
    return re*cu;
})
console.log(s);

console.dir(window.document);
console.log("pooja");
a=document.getElementById("poo");

console.log(a);
b=document.getElementsByClassName("poo");
console.dir(b);
 
let c=document.getElementsByTagName("p");
console.dir(c);
let d1=document.querySelector("box");


d1[0].innerText="pooja";*/