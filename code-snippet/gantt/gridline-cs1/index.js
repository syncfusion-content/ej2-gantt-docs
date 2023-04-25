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
		gridLines: 'Both'
});
ganttChart.appendTo('#Gantt');

