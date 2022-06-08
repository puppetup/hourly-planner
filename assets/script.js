

var updateMoment = function() {
    var today = moment();
    $('#currentDay').text(today.format('MMMM Do YYYY, h:mm:ss a'));
}

updateMoment();
setInterval(function(){
    updateMoment()
}, 1000)

function saveTask() {
    var taskText = $(this).siblings('textArea');
    var task = taskText.val();
    var time = $(this).siblings('div');
    var hour = time.text()
    
  console.log(task, hour);
    

    

    localStorage.setItem();
    


}

$('.saveBtn').on('click', saveTask)