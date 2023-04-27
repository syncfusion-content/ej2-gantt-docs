---
layout: post
title: Immutable in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Immutable in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Immutable 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Immutable in ##Platform_Name## Gantt control

The immutable mode optimizes the Gantt re-rendering performance by using the object reference and [deep compare](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality) concept. When performing the Gantt actions, it will only re-render the modified or newly added rows and prevent the re-rendering of the unchanged rows.

To enable this feature, you have to set the [enableImmutableMode](../api/gantt/#enableimmutablemode) property as **true**.

> This feature uses the primary key value for data comparison. So, you need to provide the [isPrimaryKey](../api/gantt/column/#isprimarykey) column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/immutable-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/immutable-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/immutable-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/immutable-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/immutable-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/immutable-cs1" %}
{% endif %}

## Limitations

The following features are not supported in the immutable mode:

* Column reorder
* Virtualization