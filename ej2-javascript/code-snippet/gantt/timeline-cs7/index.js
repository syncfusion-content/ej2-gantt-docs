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
		timelineSettings: {
            updateTimescaleView:false
        },
		editSettings:{
			allowEditing:true,
			allowTaskbarEditing:true
		}
});
ganttChart.appendTo('#Gantt');











