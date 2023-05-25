var ProjectResources= [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];
var GanttData = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 4,Progress: 50, resources: [1]},
            {TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',Progress: 50, resources: [2]},
            {TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '3', Progress: 50 ,resources: [3]},
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '4', Progress: 50, resources: [4]},
            {TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '6', resources: [3],Progress: 50},
            {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '7',
            }
        ]
    }];

var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
	     taskFields: {
            id: 'TaskID',
            name: 'TaskName',
			resourceInfo: 'resources',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks',
        },
		rowHeight:50,
		splitterSettings:{
			columnIndex:3
		},
		height:'450px',
		columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
			{ field: 'resources', headerText: 'Resources', width: '250',template: '#columnTemplate' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
		resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        resources: ProjectResources
	});
ganttChart.appendTo('#Gantt');




