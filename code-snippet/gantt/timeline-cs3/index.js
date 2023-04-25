var ganttChart = new ej.gantt.Gantt({
        dataSource: YearData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
		timelineSettings: {
		    timelineViewMode:'Year',
			timelineUnitSize:70
		}
});
ganttChart.appendTo('#Gantt');

















