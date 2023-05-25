


import { Gantt, Toolbar, Filter } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
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
    toolbar: ['QuickFilter', 'ClearFilter'],
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item.text === 'QuickFilter') {
            gantt.filterByColumn('TaskName', 'startswith', 'Identify');
        }
        if (args.item.text === 'ClearFilter') {
            gantt.clearFiltering();
        }
    },
    allowFiltering: true
});

gantt.appendTo('#Gantt');

let enable: Button = new Button({}, '#enable');
let disable: Button = new Button({}, '#disable');

enable.element.onclick = () => {
    gantt.toolbarModule.enableItems([gantt.element.id + '_QuickFilter', gantt.element.id + '_ClearFilter'], true);// enable toolbar items.
};

disable.element.onclick = () => {
    gantt.toolbarModule.enableItems([gantt.element.id + '_QuickFilter', gantt.element.id + '_ClearFilter'], false);// disable toolbar items.
};



