

import { Gantt } from '@syncfusion/ej2-gantt';
import { MonthData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: MonthData,
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
        timelineViewMode: 'Month',
        timelineUnitSize: 150
    }
});
gantt.appendTo('#Gantt');



