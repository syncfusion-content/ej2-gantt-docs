ej.gantt.Gantt.Inject(ej.gantt.Filter);

var ganttChart = new ej.gantt.Gantt({
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
     columns: [
            { field: 'TaskID' },
            { field: 'TaskName', filter: {
                ui: {
                    create: function(args){
                        var db = new ej.data.DataManager(ganttChart.treeGrid.grid.dataSource);
                        var flValInput = ej.base.createElement('input', { className: 'flm-input' });
                        args.target.appendChild(flValInput);
                        this.dropInstance = new ej.dropdowns.DropDownList({
                            dataSource: new ej.data.DataManager(ganttChart.treeGrid.grid.dataSource),
                            fields: { text: 'TaskName', value: 'TaskName' },
                            placeholder: 'Select a value',
                            popupHeight: '200px'
                        });
                        this.dropInstance.appendTo(flValInput);
                    },
                    write: function(args){
                        this.dropInstance.value = args.filteredValue;
                    },
                    read: function(args) {
                        args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);
                    }
                }
                }
            },
            { field: 'StartDate' },
            { field: 'Duration' }
        ],
    allowFiltering: true
    });
ganttChart.appendTo('#Gantt');


