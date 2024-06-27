## Frequency Chart

![demo](https://s10.gifyu.com/images/SrC5R.png)

## Usage

```js
<Frequency
  :data="getRandoms()"
  date-param="timeStamp"
  @onClicked="(data) => console.log(data)"
  :label="(date:Date, qty:number)=>`${qty} contributions in ${date.toLocaleDateString()}`"
  size="xs"
/>
```

### Sizing Options: 'us' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

### dateParam

Provide the parameter name (`date-param`) that defines the timestamp in your objects list.

For example:

```js
const list = [
  {
    id: 1,
    title: "Order finished",
    timeStamp: new Date(), // <-- this is the date parameter
  },
];
```

### Description

The `Frequency` component displays a chart representing frequency data. It supports various sizing options (`size`) to customize its appearance. The `date-param` prop specifies the timestamp property in the data objects provided via the `data` prop. When a day element in the chart is clicked, the `onClicked` event emits the corresponding data to the callback function specified.
