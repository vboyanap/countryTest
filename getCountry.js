$(document).ready(function(){	

  $("button").click(function(){
	 if ((document).getElementById('cName').value == '') { alert('Missing City name'); return }
    $.ajax({url: "https://restcountries.eu/rest/v2/capital/"+$("#cName").val(), success: function(result){
      $("#divCName").html(result[0].name);
    },
	error: function (xhr, status, error) {
         var errorMessage = xhr.status + ': ' + xhr.statusText
		 
		 $("#divCName").html(errorMessage);
    }});
  });
});