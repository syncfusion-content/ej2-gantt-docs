


import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Selection);

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
    splitterSettings: {
        position: "50%"
    }
    projectStartDate: new Date('04/01/2019'),
    projectEndDate: new Date('05/30/2019'),
});
gantt.appendTo('#Gantt');

let scrollBtn: Button = new Button();
scrollBtn.appendTo('#scroll');
document.getElementById('scroll').addEventListener('click', () => {
gantt.scrollToDate('05/27/2019');
});



