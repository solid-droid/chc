
 
var showDialog = function (id) {
    document
      .getElementById(id)
      .show();
  };
  
  var hideDialog = function (id) {
    document
      .getElementById(id)
      .hide();
  };
  
  ons.ready(function() {
    var pullHook = document.getElementById('pull-hook');
    
    pullHook.addEventListener('changestate', function(event) {
      var message = '';
  
      switch (event.state) {
        case 'initial':
          message = 'Pull to refresh';
          break;
        case 'preaction':
          message = 'Release';
          break;
        case 'action':
          message = 'Loading...';
          break;
      }
  
      pullHook.innerHTML = message;
    });
  
    pullHook.onAction = function(done) {
        
      setTimeout(done, 1000);
    };
  });


  function myFunction() {
    document.getElementById("pull-hook").innerHTML = "Last Update : 8/1/2018";
    document.getElementById("item1").innerHTML = "Paragraph changed!";
    document.getElementById("item2").innerHTML = "Paragraph changed!";
    document.getElementById("item3").innerHTML = "Paragraph changed!";
    document.getElementById("item4").innerHTML = "Paragraph changed!";
    document.getElementById("item5").innerHTML = "Paragraph changed!";
    document.getElementById("item6").innerHTML = "Paragraph changed!";
    document.getElementById("item7").innerHTML = "Paragraph changed!";
    document.getElementById("item8").innerHTML = "Paragraph changed!";
    document.getElementById("item9").innerHTML = "Paragraph changed!";
    document.getElementById("item10").innerHTML = "Paragraph changed!";
    document.getElementById("item11").innerHTML = "Paragraph changed!";

}

function refresh()
{
    swal({
        title: 'Welcome',
        text: "Refresh the page to stay updated",
        type: 'info',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Refresh'
      })
      .then((value) => {
          myFunction();
        swal("Done", "Refresh Successfull", "success");
      });

};

function check(id) {
  swal("Enter Declassify code:", {
    content: "input",
  })
             .then((result) => {
               if(result=="whynot2018")
               {
            swal("Success", "Now you can view the contents", "success")
.then((value) => {

        switch(id)
        {
            case "p1": p1_2018();
            break;
            case "p2": p2_2018();
            break;
            case "p3": p3_2018();
            break;
            case "p4": p4_2018();
            break;
            case "p5": p5_2018();
            break;
            case "p6": p6_2018();
            break;
        }
       });
      }
        else
        swal("Failed", "Incorrect Decryption Code", "error");
      });
      
  };

  function p1_2018()
  {
    swal( "hello")
  }
  function p2_2018()
  {
    swal("Done", "Refresh Successfull", "success");
  }
  function p3_2018()
  {
    swal("Done", "Refresh Successfull", "success");
  }
  function p4_2018()
  {
    swal("Done", "Refresh Successfull", "success");
  }
  function p5_2018()
  {
    swal("Done", "Refresh Successfull", "success");
  }
  function p6_2018()
  {
    swal("Done", "Refresh Successfull", "success");
  }