(function($){



var button = $('button');
var list = $('.list');
var url = 'https://jsonplaceholder.typicode.com/users';
// var ul = $('ul');

button.one('click', function(e){
	
	$.ajax({
		method: 'GET',
		url: url,
	}).done(function(data){
			console.log(data)
			insertContent(data)
	});

  
});

  function insertContent(data) {
			$.each(data, function(index, user){
				
				
				var userFullName = $('<h4>').text(user.name);
				
				var ul = $('<ul>', {class: "list-group"});
				var li = $('<li>', {class: "list-group-item"});	
				
				var userNick = $('<li>').text(user.username);
				var userEmail = $('<li>').text(user.email);
				var userPhone = $('<li>').text(user.phone);
				

				
				ul.append(userNick);
				ul.append(userEmail);
				ul.append(userPhone);
				li.append(userFullName);
				li.append(ul);
				list.append(li);
			
			});
		}
})(jQuery);
