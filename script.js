function checkAge(){
var birthYear=prompt("enter your birth year");
var AgeInDays=(2020-birthYear)*365;
var result=document.getElementById("result");
var h1=document.createElement('h1');
var text=document.createTextNode(`your age is${AgeInDays} Days`);
h1.setAttribute('id','ageInDays');
h1.appendChild(text);
result.appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
function catGenerate(){
    var image=document.createElement("img");
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    document.getElementById("catss").appendChild(image);
}

function rpsGame(choice){
    let botchoice,finalmessgae,humanchoice;
    humanchoice=choice.id;
    
 botchoice =computerChoice(RandomSelect());
 console.log(botchoice);
 var finalscore=decideScore(humanchoice,botchoice);
finalmessgae=scoreAndMessage(finalscore);
console.log(finalmessgae);
finalCall(humanchoice,botchoice,finalmessgae);
}
function finalCall(humanchoice,botchoice,finalmessgae){
   var user= document.getElementById("leftside");
    var mssage=document.getElementById("centerside");
    var computer=document.getElementById("rightside");
    user.innerHTML="";
    mssage.innerHTML="";
    computer.innerHTML="";
    var userimage=document.createElement('img');
    userimage.src=`${imagesDatabase(humanchoice)}`;
    userimage.height=150;
    userimage.width=150;
    userimage.style="box-shadow:0px 10px 15px 0px rgba(0,0,255,0.4)";
    user.appendChild(userimage);
    var computerimage=document.createElement('img');
    computerimage.src=`${imagesDatabase(botchoice)}`;
    computerimage.height=150;
    computerimage.width=150;
    computerimage.style="box-shadow:0px 10px 15px 0px rgba(255,0,0,0.4)"
    computer.appendChild(computerimage);
    var ele=document.createElement('h1');
   // var mes=document.createTextNode(finalmessgae['message']);
   // mssage.appendChild(ele.appendChild(mes));
    mssage.innerHTML="<h1 style='color:"+finalmessgae['color']+";font-size:50px ; text-align:center;vertical-align:middle'>"+finalmessgae['message']+"</h1>";
    

 


}
function RandomSelect(){
    return Math.floor((Math.random())*3)
}
function computerChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideScore(humanchoice,botchoice){
  var score={
      'rock':{'rock':0.5,'scissors':1,'paper':0},
      'scissors':{'rock':0,'scissors':0.5,'paper':1},
      'paper':{'rock':1,'scissors':0,'paper':0.5}
  }
 return score[humanchoice][botchoice];
 

}
function scoreAndMessage(score){
  switch(score){
      case 1:
          return {'message':'You Won','color':'green'};
     case 0:
            return {'message':'You lost','color':'red'};
     case 0.5:
                return {'message':'Tied','color':'yellow'};
  }
}
function imagesDatabase(choice){
    var images={
        'rock':"https://media.gettyimages.com/photos/limestone-picture-id170215830?s=612x612",
        'scissors':"https://st.depositphotos.com/1809585/1750/i/950/depositphotos_17505107-stock-photo-woman-hand-in-scissors-gesture.jpg",
        'paper':"https://previews.123rf.com/images/unseenthings/unseenthings0809/unseenthings080900007/3517705-single-sheet-of-loose-leaf-paper.jpg"

    }
    return images[choice];
}