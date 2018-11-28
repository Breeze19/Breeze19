$(document).ready(function(){
  $("#submit").on('click',function(){
    const data = {
      sportsName: $("#sportsDropdown :selected").text(),
      noofplayers: $("#noofplayers").val(),
      name: $("#name").val(),
      collegeName: $("#collegeName").val(),
      email: $("#email").val(),
      phno: $("#phno").val(),
      stream: $("#st").val(),
      cgx: $("#cgx").val(),
      cgxii: $("#cgxii").val(),
      cgg: $("#cgg").val(),
      lod: $("#lod").val()
    }
    $.post("https://breeze19sports.herokuapp.com/register",{data},function(response){
      console.log(response.result)
    })
  })
})
