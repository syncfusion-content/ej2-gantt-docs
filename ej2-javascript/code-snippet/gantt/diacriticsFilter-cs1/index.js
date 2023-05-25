ej.gantt.Gantt.Inject(ej.gantt.Filter);

var GanttData = [
    {
        TaskID: 1,
        TaskName: 'Projéct initiàtion',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 2, TaskName: 'Identify site locàtion', StartDate: new Date('04/02/2019'), Duration: 0,Progress: 50 },
            {TaskID: 3, TaskName: 'Perförm soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            {TaskID: 4, TaskName: 'Soil tëst appröval', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 6, TaskName: 'Develöp floor plan for estimàtion', StartDate: new Date('04/04/2019'),Duration: 3, Progress: 50, resources: [4]},
            {TaskID: 7, TaskName: 'List matërials', StartDate: new Date('04/04/2019'),Duration: 3, Progress: 50},
            {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 0, Progress: 50 }
        ]
    }];
	
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
		filterSettings: {
           ignoreAccent:true
        },
		allowFiltering: true
    });
ganttChart.appendTo('#Gantt');



