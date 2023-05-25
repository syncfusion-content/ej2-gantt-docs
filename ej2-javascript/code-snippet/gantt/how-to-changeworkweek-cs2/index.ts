


import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { data } from 'datasource.ts';

Gantt.Inject(DayMarkers)

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
    workWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    highlightWeekends: true
});

gantt.appendTo('#Gantt');



