var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 taskFields: {
            id: 'TaskID',
            name: 'TaskName',
			startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
		splitterSettings:{
		  columnIndex:3
		},
		height:'450px',
		treeColumnIndex:2
});
ganttChart.appendTo('#Gantt');


