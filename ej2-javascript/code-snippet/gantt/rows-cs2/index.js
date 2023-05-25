ej.gantt.Gantt.Inject(ej.gantt.Toolbar);

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
		editSettings:{
			allowAdding:true
		},
        actionBegin : function (args) {
            if (args.requestType == 'beforeOpenAddDialog') {
                args.rowData.TaskName = 'Gantt';
                args.rowData.Progress = 70;
                args.rowData.ganttProperties.taskName = 'Gantt';
                args.rowData.ganttProperties.progress = 70;
            }
        },
		toolbar: ['Add']
		
});
ganttChart.appendTo('#Gantt');















