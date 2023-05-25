ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Sort, ej.gantt.Resize);

var GanttData = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0,Progress: 50, resources: [1]},
            {TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',Progress: 50, resources: [2, 3, 5]},
            {TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '4', Progress: 50, resources: [4]},
            {TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '6', resources: [4, 8],Progress: 50},
            {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 0, Predecessor: '7', resources: [12, 5]
            }
        ]
    }]

var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 showColumnMenu:true,
		 allowResizing: true,
		 allowFiltering: true,
         allowSorting: true,
		 splitterSettings:{
		  position:'100%'
		},
         taskFields: {
            id: 'TaskID',
            name: 'TaskName',
		    startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks',
        },
		height:'450px'
});
ganttChart.appendTo('#Gantt');


