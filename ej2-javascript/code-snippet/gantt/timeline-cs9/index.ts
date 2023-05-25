

import { Gantt } from '@syncfusion/ej2-gantt';
import { Data } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: Data,
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
        timelineUnitSize: 100,
        topTier: {
            unit: 'Year'
        },
        bottomTier: {
            unit: 'Month',
            count: 6
        }
    }
});
gantt.appendTo('#Gantt');



