ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Selection,ej.gantt.Toolbar);

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
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel'],
        columns: [
            { field: 'TaskID' },
            { field: 'TaskName', validationRules: { required: true } },
            { field: 'StartDate', validationRules: { required: true }},
            { field: 'Duration', validationRules: { required: true } },
            { field: 'Progress', validationRules: { required: true } }
        ],
		editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        }
     });
ganttChart.appendTo('#Gantt');


