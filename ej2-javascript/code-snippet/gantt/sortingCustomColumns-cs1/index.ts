


import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';

Gantt.Inject(Sort);

let GanttData: Object[]  = [
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

let gantt: Gantt = new Gantt({
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
gantt.appendTo('#Gantt');

let sortBtn: Button = new Button();
sortBtn.appendTo('#sortColumn');

document.getElementById('sortColumn').addEventListener('click', () => {
    gantt.sortModule.sortColumn('CustomColumn', "Ascending", false)
});



