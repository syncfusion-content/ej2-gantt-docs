


import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        verified: 'verified'
    },
    splitterSettings: {
        columnIndex: 5
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'verified', headerText: 'Verified', displayAsCheckBox: true, type: 'boolean' },
        { field: 'Duration', headerText: 'Duration' }
    ]
});
gantt.appendTo('#Gantt');



