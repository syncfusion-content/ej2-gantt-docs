---
layout: post
title: Critical path in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Critical path in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Critical path 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Critical path in ##Platform_Name## Gantt control

The critical path in a project is indicated by a single task or a series of tasks. If a task in critical path is delayed, the entire project will be delayed. A task is considered to be critical if any delay to this task would affect the project end date.

The critical path can be enabled in Gantt by using the built-in toolbar button or [enableCriticalPath](../api/gantt/#enablecriticalpath) property.

The following code example shows how to display the critical path in the Gantt control:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/criticalpath-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/criticalpath-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/criticalpath-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/criticalpath-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/criticalpath-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/criticalpath-cs1" %}
{% endif %}

## Customize taskbar in critical path

The taskbar in critical path can be customized by using [queryTaskbarInfo](../api/gantt/#querytaskbarinfo) event and [isCritical](../api/gantt/iGanttData/#iscritical) property of row [data](../api/gantt/iQueryTaskbarInfoEventArgs/#data) in the event argument.

The following code example shows how to customize the critical path taskbar in the Gantt control:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/customizeCriticalPath-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customizeCriticalPath-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/customizeCriticalPath-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/customizeCriticalPath-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customizeCriticalPath-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/customizeCriticalPath-cs1" %}
{% endif %}
