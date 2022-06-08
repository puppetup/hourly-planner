
var scheduleArray = new Array(9)
var updateMoment = function() {
    var today = moment();
    $('#currentDay').text(today.format('MMMM Do YYYY, h:mm:ss a'));
}

updateMoment();
setInterval(function(){
    updateMoment()
}, 1000)

function saveTask() {
    var taskTextArea = $(this).siblings('textArea');
    var taskValue = taskTextArea.val();
    var timeId = $(this).siblings('div').attr('id');
    console.log(taskValue, timeId)
    var taskObject = {
         time: parseInt(timeId),
         task: taskValue

     }
    

    scheduleArray.splice((taskObject.time - 9), 1 , taskObject)

    localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    


}

$('.saveBtn').on('click', saveTask)