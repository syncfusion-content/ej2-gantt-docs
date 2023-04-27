ej.gantt.Gantt.Inject(ej.gantt.Toolbar,ej.gantt.Edit);
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
    editSettings: {
        allowEditing: true
    },
    splitterSettings: {
        position: '75%'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' }
    ]
});
var show= new ej.buttons.Button();
show.appendTo('#show');
var hide= new ej.buttons.Button();
hide.appendTo('#hide');
document.getElementById('show').addEventListener('click', function() {
   ganttChart.showColumn(['TaskName', 'Duration']);
});
document.getElementById('hide').addEventListener('click', function() {
   ganttChart.hideColumn(['TaskName', 'Duration']);
});
ganttChart.appendTo('#Gantt');

