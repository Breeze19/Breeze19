$(document).ready(function(){
  firebase.initializeApp(config)
  $("#submit").on('click',function(){
    const data = {
      sportsName: $("#sportsDropdown :selected").text(),
      name: $("#name").val(),
      collegeName: $("#collegeName").val(),
      email: $("#email").val(),
      phno: $("#phno").val()
    }
    firebase.database().ref("/data/").push().set(data)
    console.log(data)
  })
})
