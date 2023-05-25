ej.gantt.Gantt.Inject(ej.gantt.Toolbar,ej.gantt.Edit);
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
        allowFiltering: true,
        allowSorting: true,
        allowReordering: true,
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks',
        },
        editSettings: {
            allowEditing: true
        },
        splitterSettings: {
            position: '75%'
        },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress', allowReordering: false },
        { field: 'TaskName', headerText: 'Task Name', allowSorting: false },
        { field: 'StartDate', headerText: 'Start Date', allowEditing: false },
        { field: 'Duration', headerText: 'Duration', allowFiltering: false }
    ]
});
ganttChart.appendTo('#Gantt');

