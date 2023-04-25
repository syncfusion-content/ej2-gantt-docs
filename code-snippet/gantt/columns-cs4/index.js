ej.gantt.Gantt.Inject(ej.gantt.Resize);

var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 allowResizing: true,
	     taskFields: {
            id: 'TaskID',
            name: 'TaskName',
			startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
		splitterSettings:{
		  columnIndex:5
		},
		height:'450px',
		columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '200',minWidth: '150' ,maxWidth: '250',},
			{ field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '100',minWidth: '50' ,maxWidth: '200' },
            { field: 'Progress', headerText: 'Progress', width: '150' }
        ]
		
	});
ganttChart.appendTo('#Gantt');


