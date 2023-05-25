---
layout: post
title: Data markers in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Data markers in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data markers 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data markers in ##Platform_Name## Gantt control

Data markers are a set of events used to represent the schedule events for a task. Data markers are defined in data source as array of objects, and this value is mapped to the Gantt control using the [`taskFields.indicators`](../api/gantt/taskFields/#indicators) property. You can represent more than one data marker in a task.

Data markers can be defined using the following properties:

* [`date`](../api/gantt/iIndicator/#date): Defines the date of indicator.
* [`iconClass`](../api/gantt/iIndicator/#iconclass): Defines the icon class of indicator.
* [`name`](../api/gantt/iIndicator/#name): Defines the name of indicator.
* [`tooltip`](../api/gantt/iIndicator/#tooltip): Defines the tooltip of indicator.

>Note: Data Marker `tooltip` will be rendered only if tooltip property has value.

The following code example demonstrates how to implement data markers in the Gantt chart.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/data-markers-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/data-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/data-markers-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/data-markers-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/data-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/data-markers-cs1" %}
{% endif %}