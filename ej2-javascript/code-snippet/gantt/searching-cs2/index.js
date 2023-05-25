ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Toolbar);

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
		toolbar: ['Search'],
		searchSettings: { fields: ['TaskName'], operator: 'contains', key: 'List', ignoreCase: true }
});
ganttChart.appendTo('#Gantt');





