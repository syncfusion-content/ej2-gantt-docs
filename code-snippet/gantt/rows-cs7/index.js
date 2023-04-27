var ganttChart = new ej.gantt.Gantt({
        dataSource: projectNewData,
		height:'450px',
		 taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        allowRowDragAndDrop: true
});
ganttChart.appendTo('#Gantt');

