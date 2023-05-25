


import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from 'datasource.ts';

Gantt.Inject(Edit, Selection);

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
    }
});

gantt.appendTo('#Gantt');

let dateBtn: Button = new Button();
dateBtn.appendTo('#updateSchedule');

document.getElementById('updateSchedule').addEventListener('click', () => {
    gantt.updateProjectDates(new Date('01/10/2019'), new Date('06/20/2019'), true);
});



