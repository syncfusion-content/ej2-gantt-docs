---
layout: post
title: Show/Hide Taskbar in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Show/Hide Taskbar in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Show Hide Taskbar
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic Show/Hide Specific Taskbar in Gantt Chart

In a Gantt chart, all taskbars are usually displayed by default. However, you might want to provide users with the ability to dynamically show or hide specific taskbars based on certain conditions. This can be achieved using the [`queryTaskbarInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/ganttModel/#querytaskbarinfo) and [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/ganttModel/#querycellinfo) events. These events allow you to control the visibility of taskbars and their associated cells in the Gantt chart.

## Using the `queryTaskbarInfo` event

The `queryTaskbarInfo` event is triggered before rendering taskbars in the Gantt chart. It provides you with the ability to customize the appearance of taskbars or even hide them based on certain conditions.

```ts
queryTaskbarInfo: function (args: any) 
{
    if ( switchObj.checked && args.data.ganttProperties.taskId == 1) 
	{
		for (var i = 0; i < args.rowElement.children[0].children.length; i++) 
		{
			args.rowElement.children[0].children[i].style.display = 'none';
		}
    }
}

```

## Using the `queryCellInfo` event

The `queryCellInfo` event allows you to customize the content of individual cells in the Gantt chart. This event can be used to hide cell content or apply special styling based on specific conditions.

```ts
queryCellInfo: function (args: any) 
{
    if ( switchObj.checked && args.data.ganttProperties.taskId == 1) 
	{
		args.cell.innerText = '';
    }
}

```

The following code snippet shows how to show/hide the taskbar when rendering the Gantt control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/how-to-showhidetaskbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-showhidetaskbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-showhidetaskbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/how-to-showhidetaskbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-showhidetaskbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/how-to-showhidetaskbar-cs1" %}
{% endif %}
