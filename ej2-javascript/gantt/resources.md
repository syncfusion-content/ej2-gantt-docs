---
layout: post
title: Resources in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Resources in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Resources 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resources in ##Platform_Name## Gantt control

In Gantt, the resources are represented by staff, equipment and materials etc. In Gantt control you can show or allocate the resources (human resources) for each task.

## Resource collection

The resource collection contains details about resources that are used in the project. Resources are JSON object that contains id, name, unit and group of the resources and this collection is mapped to the Gantt control using the [`resources`](../api/gantt/#resources) property. These resource fields are mapped to the Gantt control using the [`resourceFields`](../api/gantt/#resourceFields) property.

Resource fields | Description
-----|-----
[`id`](../api/gantt/resourceFields/#id) | This field is used to assign resources to the tasks.
[`name`](../api/gantt/resourceFields/#name) | This field is used to map the resource names. These names are displayed as one of Gantt columns and also can display as labels using the [`labelSettings`](../api/gantt/labelSettings) property.
[`unit`](../api/gantt/resourceFields/#unit) | It indicates the amount of work that can be done by a resource for the task in a day.
[`group`](../api/gantt/resourceFields/#group) | This field is used to group the resources and the tasks assigned to that particular resource into category.

The following code snippets shows resource collection and how it assigned to Gantt control.

```ts

let projectResources: object[] =  resources: [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team', resourceUnit: 50},
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team', resourceUnit: 70 },
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' },
    { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team' },
    { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team' },
    { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team', resourceUnit: 40 },
];

let gantt: Gantt = new Gantt({
    resourceFields: {
        id: 'resourceId', //resource Id Mapping
        name: 'resourceName', //resource Name mapping
        unit: 'resourceUnit', //resource Unit mapping
        group: 'resourceGroup' //resource Group mapping
    },
    resources: projectResources //resource collection dataSource
 });
gantt.appendTo('#Gantt');

```

## Assign resource

We can assign resources for a task at initial load, using the resource id value of the resources as a collection. This collection is mapped from the dataSource to the Gantt control using the [`resourceInfo`](../api/gantt/taskFields/#resourceinfo) property.

Resources are assigned to tasks in following ways.

### Assign resource alone

If the unit is not specified for specific resource, the amount of work done will be consider as 100% by default. In such cases, the resource unit will not be displayed in Gantt UI.

```ts

  { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [1] },

```

### Assign resource with unit

We can assign the quantity of work done by the resources for the specific task as like below code snippet.

```ts

 { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
    resources: [{resourceId: 2, resourceUnit: 70}, {resourceId: 1, resourceUnit: 70}] },

```

When resource unit is defined in resource collection, the amount of work done by that particular resource will be same for all the tasks.

The following code snippet shows how to assign the resource for each task and map to Gantt control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/resources-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/resources-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/resources-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/resources-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/resources-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/resources-cs1" %}
{% endif %}

## Add/Edit resource collection

By using cell/ dialog edit option, we can add/remove the multiple resources for a particular task. Resource Unit can be change for a each task on resource tab in the edit dialog by double click on the unit cell.

![Cell Edit](images/cellEdit-resource.png)

![Dialog Edit](images/dialogedit-resource.png)

## Restricting Multiselect Resource Selection During Editing

In the Gantt chart, when editing task resources in the edit dialog, the default behavior allows for multiple resource selections. However, there might be cases where you want to dynamically change the resource selection to a single selection during editing. This can be achieved using the `actionBegin` and `actionComplete` events. These events help restrict the resource selection to a single resource during the editing process.

### Using the `actionBegin` and `actionComplete` events

By utilizing the `actionBegin` and `actionComplete` events, you can customize the resource selection behavior during the editing process. The goal is to ensure that only one resource can be selected at a time when editing a task.

In this code example, the actionBegin event is used to remove the first column from the resource selection tab, which effectively restricts the multiple selection behavior.

```ts

actionBegin: function(args) 
{
    if ( args.requestType == 'beforeOpenEditDialog' ||
         args.requestType == 'beforeOpenAddDialog' ) 
	{
        args.Resources.columns.splice(0, 1);
	}
},

```

The actionComplete event is employed to customize the resource selection behavior when the resource tab is selected. In this case, the selection mode is changed to single selection mode, and the selection is adjusted based on the resource information.

```ts

actionComplete: function(args) 
{
    if ( args.requestType == 'openEditDialog' ||
			args.requestType == 'openAddDialog' ) 
	{
        var resources = args.data.ganttProperties.resourceInfo;
        var tabObj = document.getElementById('ganttContainer_Tab')['ej2_instances'][0];
        tabObj.selected = function (args: any) 
		{
            if (args.selectedIndex == 1) 
			{
                var gridObj = document.getElementById('ganttContainerResourcesTabContainer_gridcontrol')['ej2_instances'][0];
                gridObj.selectionSettings = 
				{
					checkboxOnly: false,
					type: 'Single',
					persistSelection: false,
                };
                var currentViewData = gridObj.getCurrentViewRecords();
                var indexs: any = [];
                if (resources && resources.length > 0) 
				{
					currentViewData.forEach(function (data: any, index: any) {
                    for (var i = 0; i < resources.length; i++) 
					{
						if ( data.taskData['resourceId'] === resources[i]['resourceId'] &&
                        !isNullOrUndefined(gridObj.selectionModule) &&
                        gridObj.getSelectedRowIndexes().indexOf(index) === -1 ) 
						{
							indexs.push(index);
						}
                    }
                    gridObj.selectRows(indexs);
                  });
                }
            }
        };
    }
}

```

The following code snippet shows how to restrict multiselect resource selection during editing in a Gantt control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/resources-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/resources-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/resources-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/resources-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/resources-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/resources-cs2" %}
{% endif %}