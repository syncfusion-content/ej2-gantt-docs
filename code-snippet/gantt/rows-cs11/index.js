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
		allowRowDragAndDrop: true,
        rowDrop : function (args) {
            if (args.dropPosition == 'middleSegment') {
              args.cancel = true;
              ganttChart.reorderRows([args.fromIndex], args.dropIndex, 'above');
            }
        }
});
ganttChart.appendTo('#Gantt');

