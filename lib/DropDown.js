"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDown = void 0;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var DropDownHelper_tsx_1 = require("./DropDownHelper.tsx");
var styles_module_css_1 = require("./styles.module.css");
var DropDown = function (_a) {
    var options = _a.options, searchable = _a.searchable, clearable = _a.clearable, multiple = _a.multiple, model = _a.model, usePortal = _a.usePortal, portalName = _a.portalName, onChange = _a.onChange, _b = _a.zIndex, zIndex = _b === void 0 ? 1000 : _b, _c = _a.optionSelectedColor, optionSelectedColor = _c === void 0 ? '#CCC' : _c, _d = _a.optionHighlightedColor, optionHighlightedColor = _d === void 0 ? '#777' : _d, optionsComponent = _a.optionsComponent;
    var clearButton = null;
    var searchInput = null;
    var listOptions = Array.isArray(options) ? __spreadArray([], options, true) : [];
    var _e = (0, react_1.useState)(false), isListOpen = _e[0], setIsListOpen = _e[1];
    var _f = (0, react_1.useState)(false), isSearch = _f[0], setIsSearch = _f[1];
    var _g = (0, react_1.useState)(''), searchKeyword = _g[0], setSearchKeyword = _g[1];
    var _h = (0, react_1.useState)(false), isEmptyModel = _h[0], setIsEmptyModel = _h[1];
    var containerRef = (0, react_1.useRef)(null);
    var inputRef = (0, react_1.useRef)(null);
    var _j = (0, react_1.useState)(0), hilglightedListIndex = _j[0], setHighlightedListIndex = _j[1];
    function clearDropDownOptions() {
        if (multiple) {
            onChange([]);
            setIsEmptyModel(true);
        }
        else {
            onChange(undefined);
            setIsEmptyModel(true);
        }
    }
    function processDropDownOption(option) {
        if (multiple) {
            if (Array.isArray(model) && model.includes(option)) {
                onChange(model.filter(function (opt) { return opt !== option; }));
            }
            else if (Array.isArray(model)) {
                onChange(__spreadArray(__spreadArray([], model, true), [option], false));
            }
            else {
                onChange([option]);
            }
        }
        else {
            if (option !== model)
                onChange(option);
        }
    }
    function isDropDownOptionSelected(option) {
        if (!model)
            return false;
        return multiple ? model.includes(option) : model === option;
    }
    function checkModelIsEmpty(model, multiple) {
        if (multiple && Array.isArray(model) && model.length === 0) {
            setIsEmptyModel(true);
        }
        else if (multiple && Array.isArray(model) && model.length > 0) {
            setIsEmptyModel(false);
        }
        else if (!multiple && model === undefined) {
            setIsEmptyModel(true);
        }
        else {
            setIsEmptyModel(false);
        }
    }
    if (!isEmptyModel && clearable) {
        clearButton = (<button onClick={function (e) {
                e.stopPropagation();
                clearDropDownOptions();
            }} className={styles_module_css_1.default["clear-btn"]}>
        &times;
      </button>);
    }
    if (searchable) {
        searchInput = (<div className={styles_module_css_1.default["search-input"]} onClick={function (e) {
                var _a;
                e.stopPropagation();
                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                setIsListOpen(true);
            }}>
        <span className={styles_module_css_1.default["search-icon"]}>🔍</span>
        <input ref={inputRef} tabIndex={0} type="text" value={searchKeyword} onChange={function (e) {
                setSearchKeyword(e.target.value);
                setIsSearch(true);
            }}/>
        {searchKeyword.length > 0 && (<button className={styles_module_css_1.default["clear-btn"]} onClick={function (e) {
                    e.stopPropagation();
                    setIsListOpen(true);
                    setSearchKeyword('');
                }}>
            &times;
          </button>)}
      </div>);
    }
    if (searchKeyword) {
        listOptions = Array.isArray(options) ? options.filter(function (option) { return option.label.toString().toLowerCase().includes(searchKeyword.toLowerCase()); }) : [];
    }
    function handleClickOutside(event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsListOpen(false);
        }
    }
    function handleClickOptions(option) {
        processDropDownOption(option);
        setIsListOpen(false);
    }
    var defaultOptionsComponent = function (_a) {
        var listOptions = _a.listOptions, isSearch = _a.isSearch, searchKeyword = _a.searchKeyword, handleClickOptions = _a.handleClickOptions;
        return (<ul>
        {listOptions.map(function (option, index) { return (<li onClick={function () {
                    handleClickOptions(option);
                }} onMouseEnter={function () { return setHighlightedListIndex(index); }} key={index} className={"\n              ".concat(styles_module_css_1.default.option, " \n              ").concat(isDropDownOptionSelected(option) ? styles_module_css_1.default.selected : "", "\n              ").concat(index === hilglightedListIndex ? styles_module_css_1.default.highlighted : "", "\n            ")} style={{
                    '--dropdown-option-selected': optionSelectedColor,
                    '--dropdown-option-highlighted': optionHighlightedColor,
                }}>
            {isSearch ? (0, DropDownHelper_tsx_1.highlightText)(option.label, searchKeyword) : option.label}
          </li>); })}
      </ul>);
    };
    var ListComponent = optionsComponent || defaultOptionsComponent;
    (0, react_1.useEffect)(function () {
        if (isListOpen) {
            setHighlightedListIndex(0);
            setSearchKeyword('');
        }
        checkModelIsEmpty(model, multiple);
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isListOpen, model, multiple]);
    function main() {
        return (<div ref={containerRef} className={styles_module_css_1.default["container-dropdown"]}>
        <div className={styles_module_css_1.default["container-selected"]} onClick={function () { return setIsListOpen(!isListOpen); }} tabIndex={0}>
          <span className={styles_module_css_1.default.value}>
            {multiple
                ? Array.isArray(model)
                    ? model === null || model === void 0 ? void 0 : model.map(function (option, index) { return (<button key={index} onClick={function () {
                            processDropDownOption(option);
                        }} className={styles_module_css_1.default["option-badge"]}>
                    {option.label}
                    <span className={styles_module_css_1.default["remove-btn"]}>&times;</span>
                  </button>); })
                    : ""
                : model === null || model === void 0 ? void 0 : model.label}
          </span>
          {clearButton}
          <div className={styles_module_css_1.default.caret}></div>
        </div>
        {isListOpen && (<div className={styles_module_css_1.default.options} style={{ '--dropdown-z-index': zIndex }}>
            {searchInput}
            <ListComponent listOptions={listOptions} isSearch={isSearch} searchKeyword={searchKeyword} handleClickOptions={handleClickOptions}/>
          </div>)}
      </div>);
    }
    return usePortal ? react_dom_1.default.createPortal(main(), (document.getElementById(portalName) || document.body)) : main();
};
exports.DropDown = DropDown;
