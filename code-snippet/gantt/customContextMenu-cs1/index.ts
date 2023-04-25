


import { Gantt, Selection, Toolbar, Edit, Resize, Sort, ContextMenu, ContextMenuClickEventArgs, ContextMenuOpenEventArgs, ContextMenuItem} from '@syncfusion/ej2-gantt';
import { ContextMenuItemModel } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection, Toolbar,  Edit, Resize, Sort, ContextMenu, );

let contextMenuItems: (string | ContextMenuItemModel)[] = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel',
        'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' } as ContextMenuItemModel,
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' } as ContextMenuItemModel,
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' } as ContextMenuItemModel,
    ];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency:'Predecessor',
        child: 'subtasks'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    },
    enableContextMenu: true,
    allowSorting: true,
    allowResizing: true,
    contextMenuItems: contextMenuItems as ContextMenuItem[],
    contextMenuClick: (args?: ContextMenuClickEventArgs) => {
        let record = args.rowData;
        if (args.item.id === 'collapserow') {
            gantt.collapseByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'expandrow') {
            gantt.expandByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'hidecols') {
            gantt.hideColumn(args.column.headerText);
        }
    },
    contextMenuOpen: (args?: ContextMenuOpenEventArgs) => {
        let record = args.rowData;
        if (args.type !== 'Header') {
            if (!record.hasChildRecords) {
                args.hideItems.push('Collapse the Row');
                args.hideItems.push('Expand the Row');
            } else {
                if(record.expanded){
                    args.hideItems.push("Expand the Row");
                } else {
                    args.hideItems.push("Collapse the Row");
                }
            }
        }
    }
});

gantt.appendTo('#CustomContextMenu');



