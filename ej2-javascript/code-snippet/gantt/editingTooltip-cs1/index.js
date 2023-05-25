ej.gantt.Gantt.Inject(ej.gantt.Edit);
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
		editSettings: {
		   allowEditing:true,
           allowTaskbarEditing:true
        },
	    tooltipSettings: {
            showTooltip: true,
            editing: '#editingTooltip'
	    }
});
ganttChart.appendTo('#Gantt');













