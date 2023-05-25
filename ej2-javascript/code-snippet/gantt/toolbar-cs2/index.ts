


import { Gantt, Toolbar, Filter } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Filter);

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
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item.id === 'toolbarfilter') {
            gantt.filterByColumn('TaskName', 'startswith', 'Identify');
        }
    },
    toolbar: [{ text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter', align: 'Right', prefixIcon: 'e-quickfilter' }],
    allowFiltering: true
});

gantt.appendTo('#Gantt');




