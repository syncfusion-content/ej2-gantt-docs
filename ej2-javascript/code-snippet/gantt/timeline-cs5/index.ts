


import { Gantt } from '@syncfusion/ej2-gantt';
import { HourData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: HourData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    timelineSettings: {
        timelineViewMode: 'Hour'
    }
});
gantt.appendTo('#Gantt');



