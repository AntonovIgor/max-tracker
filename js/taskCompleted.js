'use strict';

(function() {

    var taskListCompleteArray = document.querySelectorAll('.task_list__complete');

    var clickTaskCompletedHandler = function (evt) {
        var parent = evt.target.parentNode;
        parent.classList.add('task-list__item--completed');

        // classList.remove(); // передать класс, который требуется удалить.
        // Класс передается без точки.

    }

    var bindListeners = function () {
        for (var i = 0; i <= taskListCompleteArray.length-1; i++) {
            console.log(i);
            taskListCompleteArray[i].addEventListener('click', clickTaskCompletedHandler);
        }
    }

    bindListeners();

})();
