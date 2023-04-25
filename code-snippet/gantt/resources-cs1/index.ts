


import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData, ProjectResources } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: '180' },
        { field: 'resources', headerText: 'Resources', width: '160' },
        { field: 'Duration', width: '100' },
    ],
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    },
    labelSettings: {
        rightLabel: 'resources'
    },
    height: '450px',
    resources: ProjectResources,
    splitterSettings: {
        columnIndex: 5.1
    }
});

gantt.appendTo('#Gantt');



