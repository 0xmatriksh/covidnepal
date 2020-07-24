 $(document).ready(function(){
 var nep = 'https://nepalcorona.info/api/v1/data/nepal'

 $.getJSON(nep,function(data){
  $('#tcase').append(data.tested_positive)
   $('#trecover').append(data.recovered)
   $('#tdeaths').append(data.deaths)
 })
 });
 
 var named= document.getElementById('district');
    document.querySelector('form.pure-form').addEventListener('submit', function (e) {
        
        
      var d;
      var count = 0;
      var death = 0;
        //prevent the normal submission of the form
        e.preventDefault();
    
        
        var url1 = `https://data.nepalcorona.info/api/v1/districts`
        $.getJSON(url1,function(data){
           for(var i = 0; i < data.length; i++) {
             
             if(named.value === data[i].title){
             var d = data[i].id;
             }
           }
   
         var url = `https://data.nepalcorona.info/api/v1/districts/${d}`

         $.getJSON(url,function(data){
          document.getElementById("name").innerText = ''
          document.getElementById("nameN").innerText = ''
          document.getElementById("cases").innerText = ''
          document.getElementById("pru").innerText = ''
          document.getElementById("rcase").innerText = ''
          document.getElementById("Rcase").innerText = ''
          document.getElementById("Rdeath").innerText = ''

          
          for(var i = 0; i < data.covid_cases.length; i++) {
            
             console.log(data.covid_cases[i].currentState)
            if(data.covid_cases[i].currentState === 'active'){
              count = count + 1;
            }
            else if(data.covid_cases[i].currentState === 'death'){
              death = death + 1
            }
          }
          
        var recovered =data.covid_cases.length - count - death
        
         
         $('#name').append(data.title)
         $('#nameN').append(data.title_ne)
         $('#cases').append(data.covid_cases.length)
         $('#rcase').append(count)
         $('#Rcase').append(recovered)
         $('#Rdeath').append(death)
         $('#pru').append(data.province)

         $('#district').val("");
        
      }) 

  })
})
