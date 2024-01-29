---
layout: post
title: Task labels in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Task labels in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Task labels 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Task labels in ##Platform_Name## Gantt control

## Task labels

The Gantt control maps any data source fields to task labels using the [`labelSettings.leftLabel`](../api/gantt/labelSettings/#leftlabel), [`labelSettings.rightLabel`](../api/gantt/labelSettings/#rightlabel), and [`labelSettings.taskLabel`](../api/gantt/labelSettings/#tasklabel) properties. You can customize the task labels with templates.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/tasklabels-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tasklabels-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tasklabels-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/tasklabels-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tasklabels-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/tasklabels-cs1" %}
{% endif %}