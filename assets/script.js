
var updateMoment = function() {
    var today = moment();
    $('#currentDay').text(today.format('MMMM Do YYYY, h:mm:ss a'));
}

updateMoment();
setInterval(function(){
    updateMoment()
}, 1000)


kSchedule()

function saveTask() {

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
    


}

var schedule = new Array(9);

function getSchedule() {
    var storedPairs = localStorage.getItem('schedule');
    if (storedPairs) {
        schedule = JSON.parse(storedSchedule);
    }
}

function displaySchedule() {
    getSchedule();
    for (let i= 0; i < schedule.length; i++) {
        var scheduleIndex = schedule[i];
        var textArea = $('#' + (i + 9));
        if (scheduleIndex) {
            var x = scheduleIndex.entry;
            textArea.val(x)
        }
    }
}

$('.saveBtn').on('click', saveTask)