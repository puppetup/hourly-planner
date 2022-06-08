var today = moment();
var updateMoment = function() {
    var today = moment();
    $('#currentDay').text(today.format('MMMM Do YYYY, h:mm:ss a'));
}

updateMoment();
setInterval(function(){
    updateMoment()
}, 1000)


displaySchedule();
setColors();

var schedule = new Array(9);

$('button').click(function() {

    getSchedule()

    var taskTextArea = $(this).siblings('textArea');
    var taskValue = taskTextArea.val();
    var timeId = $(this).siblings('div').attr('id');
    console.log(taskValue, timeId)
    var taskObject = {
         time: parseInt(timeId),
         task: taskValue

     }
    

    schedule.splice((taskObject.time - 9), 1 , taskObject)

    localStorage.setItem('schedule', JSON.stringify(schedule));
    


});

function getSchedule() {
    var storedSchedule = localStorage.getItem("schedule");
    if (storedSchedule) {
        schedule = JSON.parse(storedSchedule);
    }
}

function displaySchedule() {
    getSchedule();
    for (let i = 0; i < schedule.length; i++) {
        var scheduleItem = schedule[i];
        var textArea = $('#' + (i + 9));
        if (scheduleItem) {
            var x = scheduleItem.entry;
            textArea.val(x)
        }
    }
}

function setColors() {
    var currentTime = parseInt(today.format('H'));
    for (let i = 9; i <= 17; i++) {
        if (i === currentTime) {
            $('#' + i).css('background-color', '#ff6961');
        } else if (i > currentTime) {
            $('#' + i).css('background-color', '#77dd77');
        } else {
            $('#' + i).css('background-color', '#d3d3d3');
        }
    }
}
