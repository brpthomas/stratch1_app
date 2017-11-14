$(document).ready(function() {
    console.log('js connected!');

    //submit button to create a new task

    $('.new-task-form').on('submit', (e) => {
        e.preventDefault();

        const task = $('.task-task-input').val(),
            priority = $('.task-priority-input').val(),
            status = $('.task-status-input').val(),
            start_date = $('.task-startdate-input').val(),
            due_date = $('.task-duedate-input').val(),
            completion = $('.task-completion-input').val();

        const newTask = {
            task: task,
            priority: priority,
            status: status,
            start_date: start_date,
            due_date: due_date,
            completion: completion
        }

        $.ajax({
            method: 'POST',
            url: '/tasks/',
            data: newTask,
            success: response => {
                window.location.replace('/tasks/' + response.id)
            },
            error: msg => {
                console.log(msg);
            }
        });
    });

    //submit button to edit a task

    $('.edit-task-form').on('submit', (e) => {
        e.preventDefault();

        const task = $('.task-task-input').val(),
            priority = $('.task-priority-input').val(),
            status = $('.task-status-input').val(),
            start_date = $('.task-startdate-input').val(),
            due_date = $('.task-duedate-input').val(),
            completion = $('.task-completion-input').val(),
            id = $('.taskId').data('id');

        const updatedTask = {
            task: task,
            priority: priority,
            status: status,
            start_date: start_date,
            due_date: due_date,
            completion: completion,
            id: id
        }

        $.ajax({
            method: 'PUT',
            url: `/tasks/${id}`,
            data: updatedTask,
            success: response => {
                window.location.replace('/tasks/' + response.id)
            },
            error: msg => {
                console.log(msg);
            }
        });
    })

    //delete button to delete a task 

    $('.deleteTask').on('click', () => {
        const id = $('.deleteTask').data('id');

        console.log(id);
        console.log(typeof(id));

        $.ajax({
            method: 'DELETE',
            url: `/tasks/${id}`,
            success: response => {
                window.location.replace('/tasks/');
            },
            error: msg => {
                console.log(msg);
            }
        });
    })

    // Front end work
    function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

});