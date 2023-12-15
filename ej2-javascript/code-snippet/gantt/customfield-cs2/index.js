var GanttData = [
	{
		TaskID: 1,
		TaskName: 'Project Initiation',
		StartDate: new Date('04/02/2019'),
		EndDate: new Date('04/21/2019'),
		subtasks: 
		[
			{ TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
			{ TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
			{ TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "2FS", Progress: 50 },
			{ TaskID: 5, TaskName: 'Clear the building site', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '4FF' }
		]
	},
	{
		TaskID: 6,
		TaskName: 'Project Estimation',
		StartDate: new Date('04/02/2019'),
		EndDate: new Date('04/21/2019'),
		subtasks: 
		[
			{ TaskID: 7, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
			{ TaskID: 8, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
			{ TaskID: 9, TaskName: 'Estimation approval', StartDate: new Date('04/06/2019'), Duration: 0, Predecessor: "7SS", Progress: 50 }
		]
	},
];
var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        dependency: 'Predecessor',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
        { field: 'Predecessor', headerText: 'Depedency', width: '150' },
        { field: 'Custom', headerText: 'Custom', width: '150', visible: false }
    ],
    actionBegin: function (args) 
	{
        if (args.requestType === 'beforeOpenEditDialog') 
		{
            this.columnByField['Custom'].visible = true;
        }
    },
    actionComplete: function (args) 
	{
        if (args.requestType === 'openEditDialog') 
		{
            this.columnByField['Custom'].visible = false;
        }
    }
});
gantt.appendTo('#Gantt');