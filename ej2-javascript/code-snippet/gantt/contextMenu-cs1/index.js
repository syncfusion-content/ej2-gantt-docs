var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
        	name: 'TaskName',
        	startDate: 'StartDate',
        	dependency: 'Predecessor',
        	duration: 'Duration',
        	progress: 'Progress',
        	child: 'subtasks'
        },
		allowSorting: true,
		allowResizing: true,
		editSettings:{
			allowAdding: true,
			allowEditing: true,
			allowDeleting: true,
			allowTaskbarEditing: true
		},
		enableContextMenu: true
});
ganttChart.appendTo('#ContextMenu');

