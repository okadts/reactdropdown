import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { JSX } from 'react/jsx-runtime'
import { highlightText } from './DropDownHelper'
import styles from './DropDown.module.css'

export type KeyValueObject = {
  [key: string]: unknown
}

export type DropDownOption = {
  value: string | number | boolean | unknown
  label: string
} & (KeyValueObject)

type SingleDropDownProps = {
  multiple?: false
  model?: DropDownOption
  onChange: (value: DropDownOption | undefined) => void
}

type MultiDropDownProps = {
  multiple: true
  model?: DropDownOption[]
  onChange: (value: DropDownOption[]) => void
}

type DropDownWithPortalProps = {
  usePortal: true
  portalName: string
}

type DropDownWithoutPortalProps = {
  usePortal?: false
  portalName?: never
}

export type OptionsComponentProps = React.ElementType<{
  listOptions: DropDownOption[],
  isSearch?: boolean,
  searchKeyword?: string,
  handleClickOptions: (option: DropDownOption) => void
}>

type DropDownProps = {
  options?: DropDownOption[]
  searchable?: boolean
  clearable?: boolean
  zIndex?: number
  optionSelectedColor?: string
  optionHighlightedColor?: string
  optionsComponent?: OptionsComponentProps
} & (SingleDropDownProps | MultiDropDownProps) & (DropDownWithPortalProps | DropDownWithoutPortalProps)

export const DropDown = ({
  options,
  searchable,
  clearable,
  multiple,
  model,
  usePortal,
  portalName,
  onChange,
  zIndex = 1000,
  optionSelectedColor = '#CCC',
  optionHighlightedColor = '#777',
  optionsComponent
}: DropDownProps) => {

  let clearButton: JSX.Element | null = null
  let searchInput: JSX.Element | null = null
  let listOptions = Array.isArray(options) ? [...options] : []
  const [isListOpen, setIsListOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [isEmptyModel, setIsEmptyModel] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hilglightedListIndex, setHighlightedListIndex] = useState<number>(0)

  function clearDropDownOptions() {
    if (multiple) {
      onChange([])
      setIsEmptyModel(true)
    } else {
      onChange(undefined)
      setIsEmptyModel(true)
    }
  }

  function processDropDownOption(option: DropDownOption) {
    if (multiple) {
      if (Array.isArray(model) && model.includes(option)) {
        onChange(model.filter(opt => opt !== option))
      } else if (Array.isArray(model)) {
        onChange([...model, option])
      } else {
        onChange([option])
      }
    } else {
      if (option !== model) onChange(option)
    }
  }

  function isDropDownOptionSelected(option: DropDownOption) {
    if (!model) return false
    return multiple ? model.includes(option) : model === option
  }

  function checkModelIsEmpty(model: DropDownOption | DropDownOption[] | undefined, multiple: boolean | undefined) {
    if (multiple && Array.isArray(model) && model.length === 0) {
      setIsEmptyModel(true)
    } else if (multiple && Array.isArray(model) && model.length > 0) {
      setIsEmptyModel(false)
    } else if (!multiple && model === undefined) {
      setIsEmptyModel(true)
    } else {
      setIsEmptyModel(false)
    }
  }

  if (!isEmptyModel && clearable) {
    clearButton = (
      <button
        onClick={e => {
          e.stopPropagation();
          clearDropDownOptions();
        }}
        className={styles["clear-btn"]}
      >
        &times;
      </button>
    );
  }

  if (searchable) {
    searchInput = (
      <div
        className={styles["search-input"]} 
        onClick={e => {
          e.stopPropagation()
          inputRef.current?.focus();
          setIsListOpen(true)
        }}
      >
        <span className={styles["search-icon"]}>🔍</span>
        <input
          ref={inputRef}
          tabIndex={0}
          type="text"
          value={searchKeyword}
          onChange={e => {
            setSearchKeyword(e.target.value)
            setIsSearch(true)
          }}
        />
        {searchKeyword.length > 0 && (
          <button
            className={styles["clear-btn"]}
            onClick={e => {
              e.stopPropagation()
              setIsListOpen(true)
              setSearchKeyword('')
            }}
          >
            &times;
          </button>
        )}
      </div>
    )
  }

  if (searchKeyword) {
    listOptions = Array.isArray(options) ? options.filter(option => option.label.toString().toLowerCase().includes(searchKeyword.toLowerCase())) : []
  }

  function handleClickOutside (event: MouseEvent) {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsListOpen(false);
    }
  }

  function handleClickOptions (option: DropDownOption) {
    processDropDownOption(option)
    setIsListOpen(false)
  }

  const defaultOptionsComponent: OptionsComponentProps = ({listOptions, isSearch, searchKeyword, handleClickOptions}) => {
    return(
      <ul>
        {listOptions.map((option, index) => (
          <li
            onClick={() => {
              handleClickOptions(option)
            }}
            onMouseEnter={() => setHighlightedListIndex(index)}
            key={index}
            className = {`
              ${ styles.option } 
              ${ isDropDownOptionSelected(option) ? styles.selected : "" }
              ${ index === hilglightedListIndex ? styles.highlighted : "" }
            `}
            style={{
              '--dropdown-option-selected': optionSelectedColor,
              '--dropdown-option-highlighted': optionHighlightedColor,
            } as React.CSSProperties}
          >
            {isSearch ? highlightText(option.label, searchKeyword as string) : option.label}
          </li>
        ))}
      </ul>
    )
  }

  const ListComponent: OptionsComponentProps = optionsComponent || defaultOptionsComponent

  useEffect(() => {
    if (isListOpen) {
      setHighlightedListIndex(0)
      setSearchKeyword('')
    }
    checkModelIsEmpty(model, multiple)
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isListOpen, model, multiple])

  function main() {
    return (
      <div
        ref={containerRef}
        className={styles["container-dropdown"]}
      >
        <div
          className={styles["container-selected"]}
          onClick={() => setIsListOpen(!isListOpen)}
          tabIndex={0}
        >
          <span className={styles.value}>
            {multiple
              ? Array.isArray(model) 
                  ? model?.map(( option, index ) => (
                  <button
                    key={ index }
                    onClick={() => {
                      processDropDownOption(option)
                    }}
                    className={styles["option-badge"]}
                  >
                    { option.label }
                    <span className={styles["remove-btn"]}>&times;</span>
                  </button>
                ))
                : ""
              : model?.label}
          </span>
          {clearButton}
          <div className={styles.caret}></div>
        </div>
        {isListOpen && (
          <div
            className={styles.options}
            style={{ '--dropdown-z-index': zIndex } as React.CSSProperties}
          >
            {searchInput}
            <ListComponent listOptions={listOptions} isSearch={isSearch} searchKeyword={searchKeyword} handleClickOptions={handleClickOptions} />
          </div>
        )}
      </div>
    )
  }

  return usePortal ? ReactDOM.createPortal(main(), (document.getElementById(portalName)! || document.body)) : main()
}
