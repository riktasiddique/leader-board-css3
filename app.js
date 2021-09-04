// top-player Text Color
var topPlayer = document.getElementById('top-players-text').style.color = 'blue';
// each player baground color
var players = document.getElementsByClassName('player');
for(var player of players){
    player.style.color = 'black';
    player.style.padding = '20px 20px';
    player.style.borderRadius = '10px';
    player.style.backgroundColor = 'pink';
}
// Update Comment
document.getElementById('submit-comment').addEventListener('click', function(){
   const commentBox = document.getElementById('comment-box');
   const commentBoxValue = commentBox.value;
   const comment = document.getElementById('single-comment');
   comment.innerText = commentBoxValue;
  commentBox.value = '';
});
// Creat a new Comment
document.getElementById('submit-new-comment').addEventListener('click', function(){
    const commentBox = document.getElementById('comment-input');
    const commentValue = commentBox.value;
    const commentMain = document.getElementById('comment-main');
    var p = document.createElement('p');
    p.innerText = commentValue;
    commentMain.appendChild(p);
    commentBox.value = '';
});
// Creat new li
document.getElementById('li-submmit').addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = 'hello';
    const ul = document.getElementById('ul-main');
    ul.appendChild(li);
})
// design button
    // const button = document.getElementById('btn-plus').style.backgroundColor = 'pink';
// Value increase
document.getElementById('btn-plus').addEventListener('click', function(){
    const inputFeild = document.getElementById('input-value');
    const priviousValue= parseInt(inputFeild.value) + 1;
    if(inputFeild.value < 5){
        inputFeild.value = priviousValue;
    }
    else{
        document.getElementById("input-value").disabled = true;
    }



})
