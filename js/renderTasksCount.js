"use strict";

(function() {

  var taskListCountElement = document.querySelector(".task-list-count");

  var renderTasksCount = function (count){
    taskListCountElement.textContent = count;
    return taskListCountElement;
  }  

  window.renderTasksCount = renderTasksCount;
  
})();  