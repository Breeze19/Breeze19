$(document).ready(function(){
  $("#submit").on('click',function(){
    const data = {
      email: $("#email").val()
    }
    $.post("https://breeze19sports.herokuapp.com/email",{data},function(response){
      console.log(response.result)
    })
  })
})
