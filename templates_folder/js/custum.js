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
    var url = "http://127.0.0.1:5000/gerdata"
    fetch();

  }