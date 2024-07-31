import { useState } from 'react'
import { DropDown, DropDownOption, OptionsComponentProps } from './components/DropDown'
import { highlightText } from './components/DropDownHelper'
import './App.css'

const options: DropDownOption[] = [
  { label: "Dog", value: 1 },
  { label: "Bird", value: 2 },
  { label: "Snake", value: 3 },
  { label: "Mouse", value: 4 },
  { label: "Bat", value: 5 },
]

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
  const [valueMulti, setValueMulti] = useState<DropDownOption[]>([options[0]])
  const [valueSingle, setValueSingle] = useState<DropDownOption | undefined>(options[0])
  const [valueSearchable, setValueSearchable] = useState<DropDownOption | undefined>(options[0])
  const [valueFlex, setValueFlex] = useState<DropDownOption[] | undefined>([optionsFlex[0]])

  return (
    <>
      <p>Multiple</p>
      <DropDown
        multiple
        options={options}
        model={valueMulti}
        clearable={true}
        onChange={val => setValueMulti(val)}
      />
      <p>Single</p>
      <DropDown options={options} model={valueSingle} clearable={true} onChange={val => setValueSingle(val)} />
      {/* This will render on above root div using portal */}
      <DropDown searchable options={options} model={valueSearchable} clearable={true} usePortal={true} portalName='portalTest' onChange={val => setValueSearchable(val)} />
      {/* end portal */}
      <p>using Options List Component</p>
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
