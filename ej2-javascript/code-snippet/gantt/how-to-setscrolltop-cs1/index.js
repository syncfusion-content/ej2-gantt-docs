var ganttChart = new ej.gantt.Gantt({
        dataSource: ganttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
		splitterSettings:{
		  position: "50%"
		}
});
ganttChart.appendTo('#Gantt');

var scrollBtn= new ej.buttons.Button();
scrollBtn.appendTo('#scrollTop');

document.getElementById('scrollTop').addEventListener('click', function() {
    ganttChart.ganttChartModule.scrollObject.setScrollTop(300);
});












