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
    fetch( 'http://127.0.0.1:5000/sendata/'+fileContents, options )
        .then( response => response.json() )
        .then( response => {
            // Do something with response.
            alert("Foi")
        } );
  }



  function getRecordList(){
    var jsonDetails = [
        {
            tipo:1,
            description:"Débito",
            naturaza: "Entrada",
            sinal:"+"
        },
        {
            tipo:2,
            description:"Boleto",
            naturaza: "Saída",
            sinal:"-"
        },
        {
            tipo:3,
            description:"Financiamento",
            naturaza: "Saída",
            sinal:"-"
        },
        {
            tipo:4,
            description:"Crédito",
            naturaza: "Entrada",
            sinal:"+"
        },
        {
            tipo:5,
            description:"Recebimento Empréstimo",
            naturaza: "Entrada",
            sinal:"+"
        },
        {
            tipo:6,
            description:"Vendas",
            naturaza: "Entrada",
            sinal:"+"
        },
        {
            tipo:7,
            description:"Recebimento TED",
            naturaza: "Entrada",
            sinal:"+"
        },
        {
            tipo:8,
            description:"Recebimento DOC",
            naturaza: "Entrada",
            sinal:"+"
        },{
            tipo:9,
            description:"Aluguel",
            naturaza: "Saída",
            sinal:"-"
        },
];


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
            $('#list-item').append('<div class="text-sm border-2">'+(jsonDetails.find(element => element['tipo'] == data[i]['tipo'])['naturaza'])+'</div>');
            $('#list-item').append('<div class="text-sm border-2">'+(jsonDetails.find(element => element['tipo'] == data[i]['tipo'])['sinal'])+'</div>');
       }
       var total = 0;
       for (var i =0; i < index;i++){
            if(jsonDetails.find(element => element['tipo'] == data[i]['tipo'])['sinal'] == "+"){
                total+= parseInt(data[i]['valor'])
            }
       }
       alert(total)
       $("#total").text(total);

    }).catch(function(error) {
        alert(error);
    });

  }