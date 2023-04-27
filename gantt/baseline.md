---
layout: post
title: Baseline in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Baseline in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Baseline 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Baseline in ##Platform_Name## Gantt control

The baseline feature enables users to view the deviation between the planned dates and actual dates of the tasks in a project. Baseline dates or planned dates of a task may or may not be same as the actual task dates. The baseline can be enabled by setting the [`renderBaseline`](../api/gantt/#renderbaseline) property to true and the baseline color can be changed using the [`baselineColor`](../api/gantt/#baselinecolor) property. To render the baseline, you should map the baseline start and end date values from the data source. This can be done using the [`baselineStartDate`](../api/gantt/taskFields/#baselinestartdate) and [`baselineEndDate`](../api/gantt/taskFields/#baselineenddate) properties. The following code example shows how to enable a baseline in the Gantt control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/baseline-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/baseline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/baseline-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/baseline-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/baseline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/baseline-cs1" %}
{% endif %}