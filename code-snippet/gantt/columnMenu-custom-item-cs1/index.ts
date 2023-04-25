


import { Gantt, Filter, Sort, Resize, ColumnMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Filter, Sort, Resize, ColumnMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    showColumnMenu: true,
    allowFiltering: true,
    allowResizing: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    columnMenuItems:[{text:'Clear Sorting', id:'ganttclearsorting'}],
    columnMenuClick: function(args: MenuEventArgs){
        if(args.item.id === 'ganttclearsorting'){
            gantt.clearSorting();
        }
    },
    sortSettings:{
        columns:[{direction: "Ascending", field: "TaskName"}]
    },
    splitterSettings: {
        position: '75%'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID'},
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '100' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ],
    height: '450px'
});

gantt.appendTo('#Gantt');



