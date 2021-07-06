var fileContents


function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // use the 1st file from the list
    f = files[0];

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
        //  alert(e.target.result);
         fileContents = e.target.result;
        //   jQuery( '#ms_word_filtered_html' ).val(  );
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsText(f);
  }

  document.getElementById('upload').addEventListener('change', handleFileSelect, false);


//api end point
  function submitfunt(){
    const options = {
        method: 'GET',
        // body: JSON.stringify( params )  
    };
    fetch( 'http://127.0.0.1:5000/'+fileContents, options )
        .then( response => response.json() )
        .then( response => {
            // Do something with response.
            alert("Foi")
        } );
  }



  function getRecordList(){
    var jsonDetails = "";
    
    var url = "http://127.0.0.1:5000/gerdata"
    fetch(url).then(res => res.json()).then(data => {
        var index = data.length;
        for (var i =0; i < index;i++){
            $('#list-item').append('<div class="text-sm border-2">'+data[i]['id']+'</div>');
            $('#list-item').append('<div class="text-sm border-2">'+data[i]['tipo']+'</div>');
            $('#list-item').append('<div class="text-sm border-2">'+data[i]['data']+'</div>');
            $('#list-item').append('<div class="text-sm border-2">'+data[i]['valor']+'</div>');
            $('#list-item').append('<div class="text-sm border-2">'+data[i]['cpf']+'</div>');
            $('#list-item').append('<div class="text-sm border-2">'+data[i]['cart']+'</div>');
            $('#list-item').append('<div class="text-sm border-2">'+data[i]['hora']+'</div>');
            $('#list-item').append('<div class="text-sm border-2">'+data[i]['DonoDaLoja']+'</div>');
            $('#list-item').append('<div class="text-sm border-2">'+data[i]['NomeLoja']+'</div>');
       }
        
      

    }).catch(function(error) {
        alert(error);
    });

  }