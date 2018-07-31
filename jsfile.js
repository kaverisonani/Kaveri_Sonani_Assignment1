//Kaveri sonani 300985891

$(document).ready(function(){

var randomImage = new Array();
var count = 0;
var money = 3500;
var img1,img2,img3;

randomImage[0] = "images/apple.jpg";

	var list1 = $('#slotmachine1>ul:first');
    var list2 = $('#slotmachine2>ul:first');
    var list3 = $('#slotmachine3>ul:first');
    var firstItem1 = list1.find('li:first');
    var firstItem2 = list2.find('li:first');
    var firstItem3 = list3.find('li:first');
    firstItem1.clone().appendTo(list1);
    firstItem2.clone().appendTo(list2);
    firstItem3.clone().appendTo(list3);
	document.getElementById('usermoneylbl').innerHTML = money;
	var slot1,slot2,slot3;

function spin(count) //Function for rotation
	{
        $('#slotmachine1').stop().animate({
            top: -1200
        }, 1000, 'linear', function () {
            if (count == 0) {
                 var slot1 = Math.floor(Math.random() * 6),
                    top = -slot1 * 200,
                    time =  1000 * slot1 / 6;
                console.log(count, slot1, top, time)
                img1 = slot1;
                $(this).css({
                    top: 0
                }).animate({
                    top: top
                },time, 'easeInSine')
            } else {
                $(this).css({
                    top: 0
                })
                
                spin(count - 1);
            };
        });
		$('#slotmachine2').stop().animate({
            top: -1200
        }, 2000, 'linear', function () {
            if (count == 0) {
                 var slot2 = Math.floor(Math.random() * 6),
                    top = -slot2 * 200,
                    time =  1500 * slot2 / 6;
                console.log(count, slot2, top, time)
                img2 = slot2;
                $(this).css({
                    top: 0
                }).animate({
                    top: top
                },time, 'easeInSine')
            } else {
                $(this).css({
                    top: 0
                })
                spin(count - 1);
            };
        });
		$('#slotmachine3').stop().animate({
            top: -1200
        }, 3000, 'linear', function () {
            if (count == 0) {
                 var slot3 = Math.floor(Math.random() * 6),
                    top = -slot3 * 200,
                    time =  2500 * slot3 / 6;
                console.log(count, slot3, top, time)
                img3 = slot3;
                $(this).css({
                    top: 0
                }).animate({
                    top: top
                },time, 'easeInSine')
            } else {
                $(this).css({
                    top: 0
                })
                spin(count - 1);
            };
        
		  if (img1 == img2 && img2 == img3 && img3 == img1)
            {
                document.getElementById('winingstatuslbl').innerHTML = "You Win!!!";
	
				document.getElementById('usermoneylbl').innerHTML = money+1000;

				document.getElementById('betlbl').innerHTML = "$100";

		
            }
            else
            {
                document.getElementById('winingstatuslbl').innerHTML = "You Lost!!!";
		        document.getElementById('usermoneylbl').innerHTML = money;
				document.getElementById('betlbl').innerHTML = "$100";
            }
        
      
        });
}

$('#spinbtn').click(function() //spin button click
    { 
	
	    if (count > 0)
	   {
         refreshCounts(-100);
		  document.getElementById('creditlbl').innerHTML = count;
		 
		 
		 $('#slotmachine1').css({
            top: 0
        })
        $('#slotmachine2').css({
            top: 0
        })
        $('#slotmachine3').css({
            top: 0
        }) 
        spin(1);
	 }
          
        else
        {
            alert("yoy need credits to play game!!!");
			

        }
});

    function refreshCounts(value)
    {
        count = count + value;
	}
   
    $('#addcreditbtn').click(function() //Add Credit button
    {
	
	refreshCounts(+100);
	money=money-100;
	document.getElementById('creditlbl').innerHTML = count;
	document.getElementById('usermoneylbl').innerHTML = money;

 
    });

    $('#quitbtn').click(function quit() //Quit Button
    {
        
        window.close();
    });

    $('#resetbtn').click(function reset() //Reset Button
    {
        document.getElementById('creditlbl').innerHTML = "";
        document.getElementById('viewbox1').innerHTML = ('<img src="' + randomImage[0] + '" />');
        document.getElementById('viewbox2').innerHTML = ('<img src="' + randomImage[0] + '" />');
        document.getElementById('viewbox3').innerHTML = ('<img src="' + randomImage[0] + '" />');
	
	 document.getElementById('winingstatuslbl').innerHTML = "";
	
	 document.getElementById('usermoneylbl').innerHTML = "$0";

	 document.getElementById('betlbl').innerHTML = "";
    });
});