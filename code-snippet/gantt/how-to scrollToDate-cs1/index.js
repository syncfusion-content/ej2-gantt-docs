var gantt = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
        	name: 'TaskName',
        	startDate: 'StartDate',
        	dependency: 'Predecessor',
        	duration: 'Duration',
        	progress: 'Progress',
        	child: 'subtasks'
        },
        splitterSettings: {
            position: "50%"
        },
        projectStartDate: new Date('04/01/2019'),
        projectEndDate: new Date('05/30/2019'),
});

gantt.appendTo('#Gantt');

var scrollBtn= new ej.buttons.Button();
scrollBtn.appendTo('#scroll');
document.getElementById('scroll').addEventListener('click', function() {
gantt.scrollToDate('05/27/2019');
});

