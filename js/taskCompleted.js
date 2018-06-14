'use strict';

(function() {


    var taskListCompleteArray = document.querySelectorAll('.task_list__complete');

    var clickTaskCompletedHandler = function (evt) {
        var parent = evt.target.parentNode;
        if (evt.target.checked === true) {
            parent.classList.add('task-list__item--completed');
        } else {
            parent.classList.remove('task-list__item--completed');
        }
    }


    var bindListeners = function () {
        for (var i = 0; i <= taskListCompleteArray.length-1; i++) {            
            taskListCompleteArray[i].addEventListener('change', clickTaskCompletedHandler);
        }
    }

  
    bindListeners();
  

})();
