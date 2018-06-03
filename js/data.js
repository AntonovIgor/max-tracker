"use strict";

// IIFE
(function() {

    // Код, который исполнится при обработке сценария.
    var getAllTasks = function () {
        var result = [
            {
                category : "Домашние дела",
                deadline : "22.05.2018",
                title : "Убраться в комнате"

            },
            {
                category : "Школа",
                deadline : "18.05.2018",
                title : "Исправить оценки"
            },
            {
                category : "Личное Время",
                deadline : "01.06.2018",
                title : "Почитать книгу"
            },
            {
                category : "Личное Время",
                deadline : "01.06.2018",
                title : "Почитать книгу"
            }
        ];
        return result;
    }
    
    var getTaskCount = function (tasks) {
        return tasks.length;
    }

    var getTaskTemplate = function(category, deadline, title){
        var result = `<li class="task-list__item">
        <input class="task_list__complete" type="checkbox">
        <span class="task-list__category label label-default">${category}</span>
        <span class="task-list__deadline label label-info">${deadline}</span>
        <span class="task-list__description">${title}</span>
        </li>`;
        return result;
    }

    var renderTaskList = function(tasks){
        var taskList = document.querySelector(".task-list");
        taskList.innerHTML = "";
        var resultTemPlate= "";
        for (var i = 0; i<tasks.length;i++){
            resultTemPlate = resultTemPlate+ getTaskTemplate(tasks[i].category, tasks[i].deadline, tasks[i].title)
        }

        taskList.innerHTML= resultTemPlate;
    }

    var tasks = getAllTasks();
    renderTaskList(tasks);
      
    window.getAllTasks=getAllTasks;

})();
