const content = document.getElementsByClassName( 'content-container');



 for(let i= 0; i < content.length; i++  ){
    content[i].addEventListener('click', function() {this.classList.toggle('active');
    console.log(this.classList);
})

}
 console.log (document.getElementsByClassName('answer'));