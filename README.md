# React + TypeScript + Dropdown

First attemp to create react dropdown select plugin with portal support and custom list option component

Component Features:

- Searchable Dropdown - help filter long options list
- React Portal Support
- Single or Multiple Selection
- Customizable Option Rendering aka you can supplay your own options component
- Toggle Features (support search or non search, single or multiple)
- Z-Index Compatibility (z-index on options list can be adjust using props for better layout)


Working Demo:

- [storybook](https://reactddstorybook.pages.dev/)
- [with vite + react + ts](https://reactddvite.pages.dev/) currently not compatible in dark mode yet

## How to use it?

Docs and demo [storybook](https://reactddstorybook.pages.dev/)

How to install:

```shell
npm install okadts/reactdropdown
```
or clone the repo and use the code on lib folder

Import the component

```jsx
import type { DropDownOption, OptionsComponentProps } from '@okadts/reactdropdown'
import { DropDown, highlightText } from '@okadts/reactdropdown'
```

options sample:

```jsx
const options: DropDownOption[] = [
  { label: "Dog", value: 1 },
  { label: "Bird", value: 2 },
  { label: "Snake", value: 3 },
  { label: "Mouse", value: 4 },
  { label: "Bat", value: 5 },
]
```

Single Component sample:

```jsx
function App() {
  const [valueSingle, setValueSingle] = useState<DropDownOption | undefined>(options[0])
  return (
    <>
      <DropDown options={options} model={valueSingle} clearable={true} onChange={val => setValueSingle(val)} />
    </>
  )
}
export default App
```

Multiple Component sample:

```jsx
function App() {
  const [valueMulti, setValueMulti] = useState<DropDownOption[]>([options[0]])
  return (
    <>
      <DropDown
        multiple
        options={options}
        model={valueMulti}
        clearable={true}
        onChange={val => setValueMulti(val)}
      />
    </>
  )
}
export default App
```

Searchable Component sample with portal support:

In index.html
```html
...
  <body>
    <div class="container">
      <span>This one is on portal element <br /> with search feature</span>
      <div id="portalTest"></div>
      <div style="margin-top: 20px;"></div>
      <div id="root"></div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
...
```

In your App.tsx

```jsx
function App() {
  const [valueSearchable, setValueSearchable] = useState<DropDownOption | undefined>(options[0])
  return (
    <>
      {/* This will render on above root div using the portalTest div */}
      <DropDown searchable options={options} model={valueSearchable} clearable={true} usePortal={true} portalName='portalTest' onChange={val => setValueSearchable(val)} />
      {/* end portal */}
    </>
  )
}
export default App
```

Fexible rendering options using new Options Component:

```jsx
import type { DropDownOption, OptionsComponentProps } from '@okadts/reactdropdown'
import { DropDown, highlightText } from '@okadts/reactdropdown'


const optionsFlex: DropDownOption[] = [
  { label: "Search", value: "search", icon: "icon", handle: "handle"}
]

const optionsFlexComponent: OptionsComponentProps = ({listOptions, isSearch, searchKeyword, handleClickOptions}) => {
  return(
    <ul>
      {listOptions.map((option, index) => (
        <li
          onClick={() => {
            handleClickOptions(option)
          }}
          key={index}
        >
          {isSearch ? highlightText(option.label, searchKeyword as string) : option.label}
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [valueFlex, setValueFlex] = useState<DropDownOption[] | undefined>([optionsFlex[0]])

  return (
    <>
      <DropDown
        searchable
        multiple
        options={optionsFlex}
        clearable={true}
        model={valueFlex}
        onChange={val => setValueFlex(val)}
        optionsComponent={optionsFlexComponent}
      />
    </>
  )
}

export default App
```
