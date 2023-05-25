


import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    editSettings: {
        allowEditing: true
    },
    toolbar: ['Edit'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name', allowEditing: false },
        { field: 'StartDate', headerText: 'Start Date', },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress'  },
    ],
});

gantt.appendTo('#Gantt');



