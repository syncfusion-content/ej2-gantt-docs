---
layout: post
title: Dynamically change indicator background color in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Dynamically change indicator background color in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Indicator background color 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamically change indicator background color in ##Platform_Name## Gantt control

In a Syncfusion Gantt chart, indicators are a great way to highlight important points or events on your tasks. By default, these indicators have a black background color. However, you might want to dynamically change their background color based on certain conditions or user actions.

Here, we'll show you how to dynamically change the background color of indicators using a button click in a Syncfusion Gantt chart.

```js
document.getElementById('indicator').addEventListener('click', () => {
  var node = gantt.element.querySelectorAll('.e-indicator-span');
      node.forEach((box: any) => {
      box.children[0].style.color = 'red';
    });
});

```
The following code snippets demonstrate how to achieve this.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/indicator-background-color-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/indicator-background-color-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/indicator-background-color-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/indicator-background-color-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/indicator-background-color-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/indicator-background-color-cs1" %}
{% endif %}
