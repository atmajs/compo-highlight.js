## [Highlight.js](https://highlightjs.org/) Component

[![Bower version](https://badge.fury.io/js/compo-highlight.js.svg)](http://badge.fury.io/js/compo-highlight.js)
[![Bower version](https://badge.fury.io/bo/compo-highlight.js.svg)](http://badge.fury.io/bo/compo-highlight.js)


#### TagName

```mask
    Highlight
```

#### Attributes

|Name  | Required |Description|
|------|----------|:---------:|
|lang  |    ✓     | Language Syntax |

#### Install & Usage

1. Install `Highlight.js` library.

2. Install the component:    
    ```bash
    # npm
    npm install compo-highlight.js --save
    #bower
    bower install compo-highlight.js --save
    ```

3. Load `Highlight.js` library and `compo-highlight.js` component with resource loaders you use.

4. Usage

    - _Mask syntax_
    
        ```mask
        h4 > 'MaskJS syntax: '
        Highlight lang='mask' > """
            define Foo {
                i > '~name'
            }
        """
        ```

    - _HTML mixed syntax_
    
        ```mask
        h4 > 'MaskJS syntax: '
        <Highlight lang='mask'>
            define Foo {
                i > '~name'
            }
        </Highlight>
        ```




---