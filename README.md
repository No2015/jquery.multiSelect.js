# jquery.multiSelect.js

很奇葩的需求，select要多选。
没办法，只能写一个简单的插件，很不完善，因为直接在原select下添加的弹窗，容易受到样式干扰。

已经优化，弹出框位置放在body下，尽量减少样式干扰
-
用一个input展示框替换select，name值相同，原select的name值修改为'select-'+name.

每一个option都直接展示出来，用label元素包含，易于用户操作。

用户选择之后出发change事件，清空input展示框，遍历checked的checkbox元素，取text和value，存放在数组中，遍历结束，把text数组toString展示在input展示框，value数组toString存储在input展示框的data-values中。

可以通过$(name=name).val()和$(name=name).data('values')来获取对应的值。

*关于option，如果option的值为空，例如：`<option value="">请选择</option>`，这个option是不展示的，因为取不到value值，用户选择了也没有意义。


[演示地址](https://no2015.github.io/jquery.multiSelect.js/)
