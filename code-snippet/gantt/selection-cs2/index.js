ej.gantt.Gantt.Inject(ej.gantt.Selection);

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
		selectionSettings: {
            mode: 'Cell',
			type: 'Multiple' 
        }
    });
ganttChart.appendTo('#Gantt');

