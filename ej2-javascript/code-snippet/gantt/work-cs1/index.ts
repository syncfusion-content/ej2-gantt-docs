


import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData, resourceResources } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
      taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                resourceInfo: 'resources',
                work: 'Work',
                child: 'subtasks'
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            resources: resourceResources,
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
                unit: 'Unit'
            },
            workUnit: 'Hour',
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            allowSelection: true,
            height: '450px',
            treeColumnIndex: 1,
            columns: [
                { field: 'TaskID', visible: false },
                { field: 'TaskName', headerText: 'Task Name', width: '180' },
                { field: 'resources', headerText: 'Resources', width: '160' },
                { field: 'Work', width: '110' },
                { field: 'Duration', width: '100' },
            ],
});
gantt.appendTo('#Gantt');



