var todos = {

	toggle: function() {
		$('#addList').toggle();
	},

	add: function(e) {

		if (e.keyCode == 13) {
			// console.log(1);
			$.ajax({
				data: {name: $('#addList').val()},
				dataType: 'JSON',
				type: 'POST',
				url: 'http://139.59.230.182:3002/tasks',
				success: 
					function(data) {
						var inputVal = $('#addList').val();
						
						$('.todoList').append('<li class="todoList__list" data-id="'+ data._id +'"><span><i class="fa fa-trash-o delete"></i></span>' + inputVal + '</li>');
						$('#addList').val('');

						// console.log('A___'+data._id);
					},
			});
		};
	},

	edit: function(aa) {

		var idx = $(this).closest('li').data('id');
		var list = $(this).closest('li').text();

		$('#addList').attr('type','hidden');
		$('#editList').attr('type','text');
		$('#editList').val(list);

		// console.log('E___'+idx);
		// console.log(list);

		$('#editList').keypress(function(ee) {
			if (ee.keyCode == 13) {

			$.ajax({
				data: {
					_id: $(this).closest('li').data('id'),
					name: $('#editList').val()},
				dataType: 'JSON',
				type: 'PUT',
				url: 'http://139.59.230.182:3002/tasks/' + idx,
				success: 
					function() {
						// $('ul').find($('li')).text($('#editList').val()); // 해당 id 가진 list를 찾아서 바꿔야 하는데.....
						$('ul').find($('li')).html('<span><i class="fa fa-trash-o delete"></i></span>' + $('#editList').val());
						$('#editList').val('');
						$('#addList').attr('type','text');
						$('#editList').attr('type','hidden');

						// console.log('Hi');
					}, // f()
			}); //ajax
		}; // if (ee)
		}); //f(ee)
		
	}, //edit

	del: function() {

		var idx = $(this).closest('li').data('id');

		console.log('D___'+idx);

		$.ajax({
			dataType: "JSON",
			type: "DELETE",
			url: "http://139.59.230.182:3002/tasks/" + idx,
			success: 
				function() {
					$(this).closest('li').remove(); // 작동 안되는거 해결하기
					alert('Task successfully deleted');
				},
		});
	},

	setEvent: function() {
		$('.todoList').on('click', '.delete', this.del);
		$('#addList').keypress(this.add);
		$('ul').on('click', 'li', this.edit);
		$('.toggleBar').click(this.toggle);
	},

	init: function() {
		todos.setEvent();
	}
}