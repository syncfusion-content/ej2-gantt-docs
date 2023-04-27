


import { Gantt } from '@syncfusion/ej2-gantt';
import { WeekStartData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: WeekStartData,
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
        timelineViewMode: 'Week',
        weekStartDay: 3
    }
});
gantt.appendTo('#Gantt');



