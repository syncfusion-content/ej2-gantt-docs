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
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        allowTaskbarDragAndDrop: true,
        allowRowDragAndDrop: true
	});
ganttChart.appendTo('#Gantt');


