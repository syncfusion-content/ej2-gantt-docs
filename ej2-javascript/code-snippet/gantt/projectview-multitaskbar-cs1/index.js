ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
        dataSource: projectViewMultiTaskData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
		    child: 'subtasks',
            expandState: 'isExpand'
        },
        enableMultiTaskbar: true,
    });
ganttChart.appendTo('#Gantt');












