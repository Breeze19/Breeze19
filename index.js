$(document).ready(function(){
  $("#sportsDropdown").on('change',function(){
    console.log("1")
    var val = $("#sportsDropdown :selected").val()
    if(val == 'tkk'){
      window.location = 'formtkk.html'
    } else if(val == 'tkp'){
      window.location = 'formtkp.html'
    }
  })
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
      if(response.result == 'OK'){
        window.location = "events.html"
      }
    })
  })
  $("#submittkk").on('click',function(){
    const data = {
      weightCatBoys: $("#weightCatBoys :selected").text(),
      weightCatGirls: $("#weightCatGirls :selected").text(),
      category: $("#category :selected").text(),
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
    $.post("https://breeze19sports.herokuapp.com/register/tkk",{data},function(response){
      if(response.result == 'OK'){
        window.location = "events.html"
      }
    })
  })
  $("#submittkp").on('click',function(){
    const data = {
      category: $("#category :selected").text(),
      belt: $("#belt").text(),
      pair: $("#pair").text(),
      group: $("#group").text(),
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
    $.post("https://breeze19sports.herokuapp.com/register/tkp",{data},function(response){
      if(response.result == 'OK'){
        window.location = "events.html"
      }
    })
  })
})
