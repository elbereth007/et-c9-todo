// firehose track 6, lesson 18 - file created 14 jul 17 for refactoring code

// code moved here 14 jul 17 from app/views/static_pages/index.html.erb

  $(function() {
    
// next 5 lines added/modified/moved 14 jul 17 for adding task form/form submission/add tasks to page (lessons 14, 16, 17)

// code block mmoved here 14 jul 17 for refactoring code (lesson 13)
    // The taskHtml method takes in a JavaScript representation
    // of the task and produces an HTML representation using
    // <li> tags
    function taskHtml(task) {
      var checkedStatus = task.done ? "checked" : "";
      var liElement = '<li><div class="view"><input class="toggle" type="checkbox"' +
        " data-id='" + task.id + "'" +     // added 14  jul 17 for toggling completion (lesson 11)
        checkedStatus +
        '><label>' +
         task.title +
         '</label></div></li>';

      return liElement;
    }
    
// code block mmoved here 14 jul 17 for refactoring code (lesson 13)
    // toggleTask takes in an HTML representation of the
    // an event that fires from an HTML representation of
    // the toggle checkbox and  performs an API request to toggle
    // the value of the `done` field
    function toggleTask(e) {
      var itemId = $(e.target).data("id");
//      console.log(itemId);                  // commented out 14 jul 17 for code refactoring (lesson 13)

      var doneValue = Boolean($(e.target).is(':checked'));
//      console.log("done:", doneValue);      // commented out 14 jul 17 for code refactoring (lesson 13)

      $.post("/tasks/" + itemId, {
        _method: "PUT",
        task: {
          done: doneValue
        }
      });
    }
    
    $.get("/tasks").success( function( data ) {
      var htmlString = "";
      
      $.each(data, function(index,  task) {
         htmlString += taskHtml(task);
      });
      var ulTodos = $('.todo-list');
      ulTodos.html(htmlString);
      
// next 12 lines added/moved 14 jul 17 for toggling completion, refactoring (lessons 11, 13)
      $('.toggle').change(toggleTask);
      
    });
    
    $('#new-form').submit(function(event) {
      event.preventDefault();
      var textbox = $('.new-todo');
      var payload = {
        task: {
          title: textbox.val()
        }
      };
      $.post("/tasks", payload).success(function(data) {
        
// next 2 lines added/modified 14 jul 17 for adding tasks to page (lesson 17)
        var htmlString = taskHtml(data);
        var ulTodos = $('.todo-list');
        ulTodos.append(htmlString);
        $('.toggle').click(toggleTask);
//        console.log(htmlString);
//        console.log(data);          // added/deleted 14 jul 17 for adding tasks to page (lesson 17)
      });
    });
    
  });