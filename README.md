# rf-05

## Styling React components

###Inline

#### HTML e.g.

`<div style="margin-top: 20px; background-color: blue;"></div>`

#### React e.g.

- `<div style={{marginTop: 20, backgroundColor: 'blue'}} />`

__IMPORTANT__: The `{{` and `}}` is a combination of a JSX expression and an object expression.

or

- passing in an object 
```
const myStyles = {
  marginTop: 20,
  backgroundColor: 'blue',
  color: 'black'
}
 
<div style={myStyles} />
```

Attribution: https://epicreact.dev/modules/react-fundamentals/
