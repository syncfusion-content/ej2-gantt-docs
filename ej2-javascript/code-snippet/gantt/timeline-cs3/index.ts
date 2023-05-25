


import { Gantt } from '@syncfusion/ej2-gantt';
import { YearData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: YearData,
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
        timelineViewMode: 'Year',
        timelineUnitSize: 70
    }
});
gantt.appendTo('#Gantt');



