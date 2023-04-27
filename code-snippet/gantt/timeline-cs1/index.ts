

import { Gantt } from '@syncfusion/ej2-gantt';
import { WeekData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: WeekData,
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
        timelineViewMode: 'Week'
    }
});
gantt.appendTo('#Gantt');



