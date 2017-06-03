(function($){


	var ul = $('.list');

	var button = $('<button></button>',{
		text: 'Dodaj element Li',
		class: 'btn btn-default',
		on: {
			click: function(event){
				var txt = button.text();
				event.preventDefault();
				
				var input = $('.form-control').val();
				console.log(input)
				
				if(input === ''){
					console.log('pusty input');
					
				} else {
					if($(this).text() === txt) {
					
						$(this).text('Dodaj kolejny li');	
				} 	

				var li = $('<li>'+ input +'</li>');

				ul.append(li);
				// console.log('działa')

				$('.form-control').val('');
				}

			}
		}
	});

	$('.buttonContainer').append(button);


	var btn = $('.btn-primary');
	var msg = btn.text();

	btn.on('click', function(){
		if(btn.text() === msg) {
			btn.text('Close');	
		} else {
			btn.text(msg);
		}
 	});


})(jQuery);