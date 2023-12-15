---
layout: post
title: Customizing the empty data source message in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Customizing the empty data source message in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customizing the empty data source message 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customizing the empty data source message in ##Platform_Name## Gantt control

By default, the Gantt component displays the message "No records to display" when the data source is empty. However, you can customize this message using [`localization`](https://ej2.syncfusion.com/documentation/gantt/global-local#localization) to provide a more meaningful message to your users.

The following code snippets demonstrate how to achieve this.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/how-to-no-records-display-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-no-records-display-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-no-records-display-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/how-to-no-records-display-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-no-records-display-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/how-to-no-records-display-cs1" %}
{% endif %}
