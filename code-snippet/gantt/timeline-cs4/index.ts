

import { Gantt } from '@syncfusion/ej2-gantt';
import { DayData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: DayData,
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
        timelineViewMode: 'Day'
    }
});
gantt.appendTo('#Gantt');



