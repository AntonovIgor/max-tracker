'use strict';

(function () {

    // 1. Поставить обработчик события click на кнопку
    // 2. Написать функицю валидатор.
    // 3. Код доблавления новой задачи.

    var newTaskFormElement = document.querySelector('.new-task');

    var addTaskButtonElement = newTaskFormElement.querySelector('.add-task-button');
    var newTaskTitleElement = newTaskFormElement.querySelector('.new-task__title');
    var newTaskDeadlineElement = newTaskFormElement.querySelector('.new-task__deadline ');
    var newTaskCategoryElement = newTaskFormElement.querySelector('.new-task__category');

    var isValidateForm = function () {
        var result = true;
          
        newTaskTitleElement.setCustomValidity('');

        if (newTaskTitleElement.value === '') {
            result = false;
            newTaskTitleElement.setCustomValidity('Заполните заголовок');
        }
        
        newTaskDeadlineElement.setCustomValidity('');
       
        if (newTaskDeadlineElement.value === '') {
            result = false;
            newTaskDeadlineElement.setCustomValidity('Заполните дату завершения');
        }

        newTaskCategoryElement.setCustomValidity('');

        if (newTaskCategoryElement.value === '') {            
            result = false;
            newTaskCategoryElement.setCustomValidity('Заполните категорию задачи.');
        }
        
        return result;
    } 

    addTaskButtonElement.addEventListener('click', function (evt) {
        evt.preventDefault();  
        
        if (isValidateForm() === true) {
          
            var newTaskObject = {
                category : newTaskCategoryElement.value,
                deadline : newTaskDeadlineElement.value,
                title : newTaskTitleElement.value
            };

            window.data.allTasks.push(newTaskObject);
            window.data.renderTaskList(window.data.allTasks);

        } else {
            alert('Ошибка!!!!');
        }

        
    });


})();