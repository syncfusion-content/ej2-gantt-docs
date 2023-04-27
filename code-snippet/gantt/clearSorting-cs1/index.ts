


import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Sort);

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
    sortSettings: { columns: [{ field: 'TaskID', direction: 'Ascending' }, { field: 'TaskName', direction: 'Ascending' }] },
    allowSorting: true
});
gantt.appendTo('#Gantt');

let clrBtn: Button = new Button();
clrBtn.appendTo('#clearSorting');

document.getElementById('clearSorting').addEventListener('click', () => {
    gantt.clearSorting();
});



