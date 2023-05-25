


import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Sort);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    }
});
gantt.appendTo('#Gantt');

let sortBtn: Button = new Button();
sortBtn.appendTo('#sortColumn');

document.getElementById('sortColumn').addEventListener('click', () => {
    gantt.sortModule.sortColumn('TaskName', "Descending", false)
});



