ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar,ej.gantt.Selection);

var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        work: 'Work',
        child: 'subtasks'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    taskType: 'FixedWork',
    resources: resourceResources,
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit'
    },
    workUnit: 'Hour',
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    allowSelection: true,
    height: '450px',
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: '180' },
        { field: 'resources', headerText: 'Resources', width: '160' },
        { field: 'work', width: '110' },
        { field: 'Duration', width: '100' },
        { field: 'taskType', headerText: 'Task Type', width: '110' }
    ],
});
gantt.appendTo('#Gantt');

