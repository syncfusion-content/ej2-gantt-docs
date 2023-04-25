


import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Selection);

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
    selectionSettings: {
        mode: 'Cell'
    }
});
gantt.appendTo('#Gantt');

let cellBtn: Button = new Button();
cellBtn.appendTo('#selectCell');

document.getElementById('selectCell').addEventListener('click', () => {
    gantt.selectionModule.selectCell({ cellIndex: 1, rowIndex: 1 });
});



