var GanttData = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '2' },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '3'  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '4' },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '6' },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '1' },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '5' }
            ]
        },
    ];

    var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'CustomColumn', headerText: 'CustomColumn' }
    ]
});
ganttChart.appendTo('#Gantt');

var sortBtn= new ej.buttons.Button();
sortBtn.appendTo('#sortColumn');

document.getElementById('sortColumn').addEventListener('click', () => {
    var ganttObj= document.getElementById('Gantt').ej2_instances[0];
	ganttObj.sortModule.sortColumn('CustomColumn',"Ascending",false)
});
        

