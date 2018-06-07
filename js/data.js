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

    var getAllCategories = function () {
        var result = [
            {
                categoryTitle: 'Домашние дела',
                categorySystemName: 'homeThings'
            },
            {
                categoryTitle: 'Школа',
                categorySystemName: 'school'
            },
            {
                categoryTitle: 'Спортзал',
                categorySystemName: 'sportzal'
            },
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

    var getCategoriesTemplate = function(categoryName, categorySystemName) {
        return `<option value="${categorySystemName}">${categoryName}</option>`;        
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

    var renderCategoriesList = function (categories) {
        var categoriesElement = document.querySelector('.categories');
        categoriesElement.innerHTML = '';     

        // Вспомнить про отрисовку. Способ ниже перерисовыется на каждой
        // итерации цикла.

        for (var i = 0; i < categories.length; i++) {            
            categoriesElement.innerHTML += getCategoriesTemplate(categories[i].categoryTitle, categories[i].categorySystemName);
        }
    }

    var getCategoryTitleBySystemName  = function (systemName) {
        for (var i = 0; i < allCategories.length - 1; i++)  {
            if (allCategories[i].categorySystemName === systemName) {
                return allCategories[i].categoryTitle;
            }
        };
        
        return '';
    } 

    var tasks = getAllTasks();
    renderTaskList(tasks);

    var allCategories = getAllCategories();
    renderCategoriesList(allCategories);

    window.renderTasksCount(tasks.length);  
    

    window.data = {
        allTasks: tasks,
        renderTaskList: renderTaskList,
        getCategoryTitleBySystemName: getCategoryTitleBySystemName
    };  

})();
