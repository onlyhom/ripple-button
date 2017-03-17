# rippleButton.js    

模拟谷歌水波纹按钮效果插件
提供两个版本:
- 原生js版 不依赖任何库
- JQuery版 使用更轻巧  

# Demo

![Image text](http://p1.bpimg.com/567571/cfc3893d9214bb6b.gif)


----

## for- Native JS


### Installation

```html
<script src="js/rippleButton.js" type="text/javascript"></script>
```

### Usage

```html
<div class="btn">Button</div>

<script type="text/javascript">
    var ripple = new RippleButton('.btn',{
        alpha: '0.5',
        speed: '1.1s',
        transitionEnd:function(){ //transition End
            console.log('finished');
        }
    });
</script>
```

----

## for- JQuery


### Installation

```html
<script src="js/jquery.rippleButton.js" type="text/javascript"></script>
```

### Usage

```html
<div class="btn">Button</div>

<script type="text/javascript">
    $('.btn').rippleButton();

    // or

    $('.btn').rippleButton({
        alpha: '0.5',
        speed: '1.1s',
        transitionEnd:function(){
            console.log('finished');
        }
    });

</script>
```

### Options   

| Option | Default | type | Description |
| ------ |------| -----| ----- |
| alpha | 0.5s | string | The transparency alpha of the ripple.|
| speed | 1.1s | string | The duration which are given in milliseconds of effect.|
| transitionEnd | function(){} | function | Callback after transition end. |
 








