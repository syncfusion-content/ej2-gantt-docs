ej.gantt.Gantt.Inject(ej.gantt.Reorder);

var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 allowReordering: true,
	     taskFields: {
            id: 'TaskID',
            name: 'TaskName',
			startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks',
        },
		height:'450px',
		splitterSettings:{
			columnIndex:5
		}
});
ganttChart.appendTo('#Gantt');


