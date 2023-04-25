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
		  columnIndex:4
		},
		height:'450px'
});
ganttChart.appendTo('#Gantt');


