


import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter);

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
    allowFiltering: true
});
gantt.appendTo('#Gantt');

let filterBtn: Button = new Button();
filterBtn.appendTo('#filter');

document.getElementById('filter').addEventListener('click', () => {
    gantt.filterByColumn('TaskName', 'startswith', 'Iden');
});



