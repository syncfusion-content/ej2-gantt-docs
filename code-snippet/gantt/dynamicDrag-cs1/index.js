var ganttChart = new ej.gantt.Gantt({
         dataSource: projectNewData,
		 height:'450px',
		 taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        allowRowDragAndDrop: true
	});
ganttChart.appendTo('#Gantt');

var dragBtn= new ej.buttons.Button();
dragBtn.appendTo('#dynamicDrag');

document.getElementById('dynamicDrag').addEventListener('click', function() {
    ganttChart.reorderRows([1,2,3], 4, 'child');
});



