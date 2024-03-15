---
layout: post
title: Managing tasks in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Managing tasks in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Managing tasks 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Managing tasks in ##Platform_Name## Gantt control

The Gantt component has options to dynamically insert, delete, and update tasks in the project. The primary key column is necessary to manage the tasks and perform CRUD operations in Gantt. To define the primary key, set the [`columns.isPrimaryKey`](../../api/gantt/column/#isprimarykey) property to `true` in the particular column.

To use CRUD, inject the [`Edit`](../../api/gantt/#editmodule) module into the Gantt control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs12" %}
{% endif %}

## Cell edit type and its params

The [`columns.editType`](../../api/gantt/column/#edittype) is used to define the edit type for any particular column.
You can set the [`columns.editType`](../../api/gantt/column/#edittype) based on data type of the column.

* `numericedit` - [`NumericTextBox`](https://ej2.syncfusion.com/javascript/documentation/numerictextbox/) component for integers, double, and decimal data types.

* `defaultedit` - [`TextBox`](https://ej2.syncfusion.com/javascript/documentation/textbox/) component for string data type.

* `dropdownedit` - [`DropDownList`](https://ej2.syncfusion.com/javascript/documentation/drop-down-list/) component to show all unique values related to that field.

* `booleanedit` - [`CheckBox`](https://ej2.syncfusion.com/javascript/documentation/check-box/) component for boolean data type.

* `datepickeredit` - [`DatePicker`](https://ej2.syncfusion.com/javascript/documentation/datepicker/) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](https://ej2.syncfusion.com/javascript/documentation/datetimepicker/) component for date time data type.

Also, you can customize the behavior of the editor component through the [`columns.edit.params`](../../api/gantt/column/#edit).

The following table describes cell edit type component and their corresponding edit params of the column.

Edit Type |Component |Example
-----|-----|-----
`numericedit` | [`NumericTextBox`](https://ej2.syncfusion.com/javascript/documentation/numerictextbox/) | params: { decimals: 2, value: 5 }
`dropdownedit` | [`DropDownList`](https://ej2.syncfusion.com/javascript/documentation/drop-down-list/) | params: { value: 'Germany' }
`booleanedit` | [`Checkbox`](https://ej2.syncfusion.com/javascript/documentation/check-box/) | params: { checked: true}
`datepickeredit` | [`DatePicker`](https://ej2.syncfusion.com/javascript/documentation/datepicker/) | params: { format:'dd.MM.yyyy' }
`datetimepickeredit` | [`DateTimePicker`](https://ej2.syncfusion.com/javascript/documentation/datetimepicker/) | params: { value: new Date() }

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/managingTasks-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/managingTasks-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managingTasks-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/managingTasks-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/managingTasks-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/managingTasks-cs2" %}
{% endif %}

## Cell Edit Template

The cell edit template is used to create a custom component for a particular column by invoking the following functions:

* `create` - It is used to create the element at the time of initialization.

* `write` - It is used to create the custom component or assign default value at the time of editing.

* `read` - It is used to read the value from the component at the time of save.

* `destroy` - It is used to destroy the component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/managingTasks-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/managingTasks-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managingTasks-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/managingTasks-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/managingTasks-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/managingTasks-cs3" %}
{% endif %}

## Disable editing for particular column

You can disable editing for particular columns, by using the [`columns.allowEditing`](../../api/gantt/column/#allowediting) property.

In the following demo, editing is disabled for the `TaskName` column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/managingTasks-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/managingTasks-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managingTasks-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/managingTasks-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/managingTasks-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/managingTasks-cs4" %}
{% endif %}

## Read-only Gantt

In Gantt, all create, update, delete operations can be disabled by set `readOnly` property as `true`. The following sample demonstrates, render Gantt chart as read only.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/editing-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editing-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/editing-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/editing-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editing-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/editing-cs4" %}
{% endif %}

## Troubleshoot: Editing works only when primary key column is defined

Editing feature requires a primary key column for CRUD operations. While defining columns in Gantt using the [`columns`](../../api/gantt/#columns) property, it is mandatory that any one of the columns, must be a primary column. By default, the [`id`](../../api/gantt/taskFields/#id) column will be the primary key column.  If [`id`](../../api/gantt/taskFields/#id) column is not defined, we need to enable [`isPrimaryKey`](../../api/gantt/column/#isprimarykey) for any one of the columns defined in the [`columns`](../../api/gantt/#columns) property.

## Open new task dialog with default values

You can set default values when new task dialog opens using [actionBegin](../../api/gantt/#actionbegin) event when `requestType` is `beforeOpenAddDialog`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/rows-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/rows-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/rows-cs2" %}
{% endif %}

## Customize control in add/edit dialog

In Gantt Chart, the controls such as form elements, grid and RTE in add and edit dialog can be customized by using [additionalParams](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property.

### Customize general tab of dialog 

In the general tab of add/edit dialog, the custom input [fields](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettings/#fields) can be included into fields by defining the field names either from the data source or template in [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/editDialogFieldSettings/) respectively.

In the below sample, added field from the template to general tab.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/rows-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/rows-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/rows-cs14" %}
{% endif %}
        
### Customize dependency, segments and resources tab of dialog 

[Grid](https://ej2.syncfusion.com/documentation/api/grid/) component in the dependency, segment and resource tab of add/edit dialog can be customized, by defining grid module properties in the [additionalParams](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property of [addDialogFields](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/documentation/api/editDialogFieldSettings/).

In the below code show cases, how to add additional features to dependency, segments and resources tab.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/rows-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/rows-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/rows-cs15" %}
{% endif %}

### Customize note dialog tab

 [RTE](https://ej2.syncfusion.com/documentation/api/rich-text-editor/) component in notes tab of add and edit dialog can be customized, by defining RTE module properties in the [additionalParams](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property of [addDialogFields](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/documentation/api/gantt/editDialogFieldSettings/).
 
 The below code shows how to enable inline mode to RTE in notes tab.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/rows-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/rows-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/rows-cs16" %}
{% endif %}
        
## Touch interaction

The Gantt control editing actions can be achieved using the double tap and tap and drag actions on a element.

The following table describes different types of editing modes available in Gantt.

Action |Description
-----|-----
[`Cell editing`](managing-tasks/#cell-editing) | To perform `double tap` on a specific cell, initiate the cell to be in edit state.
[`Dialog editing`](managing-tasks/#dialog-editing) | To perform `double tap` on a specific row, initiate the edit dialog to be opened.
[`Taskbar editing`](managing-tasks/#taskbar-editing) | Taskbar editing action is initiated using the `tap` action on the taskbar. <br> **Parent taskbar** : Once you tap on the parent taskbar, it will be changed to editing state. Perform only dragging action on parent taskbar editing. <br> ![Alt text](images/editing-parent.PNG) <br> **Child taskbar** : Once you tap the child taskbar, it will be changed to editing state. <br> ![Alt text](images/editing-state.PNG) <br> **Dragging taskbar** : To drag a taskbar to the left or right in editing state. <br> <br> **Resizing taskbar** : To resize a taskbar, drag the left/right resize icon. <br> <br> **Progress resizing** : To change the progress, drag the progress resize icon to the left or right direction.

### Task dependency editing

You can `tap` the left/right connector point to initiate [`task dependencies`](managing-tasks/#task-dependencies) edit mode and again tap another taskbar to establish the dependency line between two taskbars.

The following table explains the taskbar state in dependency edit mode.

![Taskbar states](images/taskbar-states.png)

Taskbar state |Description
-----|-----
`Parent taskbar` | You cannot create dependency relationship to parent tasks. <br> ![Parent taskbar](images/parent-taskbar.PNG)
`Taskbar without dependency` |  If you tap a valid child taskbar, it will create `FS` type dependency line between tasks, otherwise exits from task dependency edit mode. <br> ![Valid taskbar](images/valid-taskbar.PNG)
`Taskbar with dependency` | If you tap the second taskbar, which has already been directly connected, it will ask to remove it. <br> ![Invalid taskbar](images/invalid-taskbar.PNG)
`Removing dependency` | Once you tap the taskbar with direct dependency, then confirmation dialog will be shown for removing dependency. <br> ![Confirm dialog](images/confirm-dialog.PNG)

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/touch-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/touch-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/touch-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/touch-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/touch-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/touch-cs1" %}
{% endif %}

>Note: In mobile device, you cannot create dependency other than `FS` by taskbar editing. By using cell/dialog editing, you can add all type of dependencies.

## Taskbar editing tooltip

The taskbar editing tooltip can be customized using the [`tooltipSettings.editing`](../api/gantt/tooltipSettings/#editing) property. The following code example shows how to customize the taskbar editing tooltip in Gantt.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/editingTooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editingTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/editingTooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/editingTooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editingTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/editingTooltip-cs1" %}
{% endif %}