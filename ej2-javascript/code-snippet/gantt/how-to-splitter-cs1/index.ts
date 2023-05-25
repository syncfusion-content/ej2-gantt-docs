


import { Gantt } from '@syncfusion/ej2-gantt';
import { data } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    splitterSettings: {
        position: "50%"
    }
});

gantt.appendTo('#Gantt');



