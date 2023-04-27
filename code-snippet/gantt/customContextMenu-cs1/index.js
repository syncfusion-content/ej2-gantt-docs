var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
        	name: 'TaskName',
        	startDate: 'StartDate',
        	dependency: 'Predecessor',
        	duration: 'Duration',
        	progress: 'Progress',
        	child: 'subtasks'
        },
        allowSorting: true,
        allowResizing: true,
		editSettings:{
			allowAdding: true,
			allowEditing: true,
			allowDeleting: true,
			allowTaskbarEditing: true
		},
        enableContextMenu: true,
        contextMenuItems: ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel',
            'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
            { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
            { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
			{ text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
        ],
        contextMenuClick: function (args) {
            var record = args.rowData;
            if (args.item.id === 'collapserow') {
                ganttChart.collapseByID(Number(record.ganttProperties.taskId));
            }
            if (args.item.id === 'expandrow') {
                ganttChart.expandByID(Number(record.ganttProperties.taskId));
            }
            if (args.item.id === 'hidecols') {
                ganttChart.hideColumn(args.column.headerText);
            }
        },
        contextMenuOpen: function (args) {
            var record = args.rowData;
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
ganttChart.appendTo('#CustomContextMenu');

