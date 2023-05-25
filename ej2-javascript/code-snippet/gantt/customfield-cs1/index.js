
var divElement;
var inputs = {
  booleanedit: ej.buttons.CheckBox,
  dropdownedit: ej.dropdowns.DropDownList,
  datepickeredit: ej.calendars.DatePicker,
  datetimepickeredit: ej.calendars.DateTimePicker,
  maskededit: ej.inputs.MaskedTextBox,
  numericedit: ej.inputs.NumericTextBox,
  stringedit: ej.inputs.TextBox
};
var gantt = new ej.gantt.Gantt({
     dataSource: GanttData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        },
        editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        mode: "Auto"
    },
    columns: [
        { field: 'TaskID', width: '150' },
        { field: 'TaskName', width: '250' },
        { field: 'StartDate', width: '250' },
        { field: 'Duration', width: '250' },
        { field: 'Progress', width: '250' },
        { field: 'CustomField', width: '250' }
    ],
    toolbar: ['Add', 'Cancel', 'CollapseAll', 'Delete', 'Edit', 'ExpandAll', 'Update'],
    editDialogFields: [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ],
    addDialogFields: [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ],
    actionBegin: function(args) {
        if (args.requestType === "beforeOpenEditDialog" || args.requestType === "beforeOpenAddDialog" ) {
          var column = this.columnByField["CustomField"];
          divElement = this.createElement("div", {
            className: "e-edit-form-column"
          });
          var inputElement;
          inputElement = this.createElement("input", {
            attrs: {
              type: "text",
              id: this.controlId + "" + column.field,
              name: column.field,
              title: column.field
            }
          });
          divElement.appendChild(inputElement);
          var input = {
            enabled: true,
            floatLabelType: "Auto",
            placeholder: "CustomField",
            value: args.rowData.CustomField
          };
          var inputObj = new inputs[column.editType](input);
          inputObj.appendTo(inputElement);
        }
    },
      actionComplete: function(args) {
        if (args.requestType === "openEditDialog" || args.requestType === "openAddDialog") {
          var generalTab = document.getElementById(
            this.controlId + "GeneralTabContainer"
          );
          generalTab.appendChild(divElement);
        }
      }
});

gantt.appendTo('#Gantt');

