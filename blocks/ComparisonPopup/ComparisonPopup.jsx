import React, { useState } from "react";
import dynamic from "next/dynamic";
import Select, { components } from "react-select";
import styles from "./index.module.scss";
import cx from "classnames";
const Popup = dynamic(() => import("../../components/Popup"));
const H1 = dynamic(() => import("../../components/Text/H1"));
const Button = dynamic(() => import("../../components/Button"));

const Control = ({ children, ...props }) => {
  let logo = props.hasValue ? props?.getValue()?.[0]?.logo : null;
  return (
    <components.Control {...props} className={styles.control}>
      {logo && (
        <div
          className={styles.logo}
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
      )}
      {children}
    </components.Control>
  );
};

const Option = (props) => {
  const { isSelected, isFocused } = props;

  return (
    <components.Option
      {...props}
      className={cx(styles.option, {
        [styles.optionSelected]: isSelected,
        [styles.optionFocused]: isFocused,
      })}
    />
  );
};

const DropdownIndicator = (props) => {
  console.log(props);
  const { isFocused } = props;
  return (
    <components.DropdownIndicator
      {...props}
      className={cx({ [styles.isDropdownOpen]: isFocused })}
    ></components.DropdownIndicator>
  );
};

const IndicatorSeparator = ({ innerProps }) => {
  return <span style={{ display: "none" }} {...innerProps} />;
};

export default function ComparisonPopup(props) {
  const { tools } = props;
  const [selectedOptionFirst, setSelectedOptionFirst] = useState(null);
  const [selectedOptionSecond, setSelectedOptionSecond] = useState(null);

  const handleChangeFirst = (selectedOption) => {
    setSelectedOptionFirst(selectedOption);
  };
  const handleChangeSecond = (selectedOption) => {
    setSelectedOptionSecond(selectedOption);
  };

  const options = tools.map((tool) => {
    return { value: tool.id, label: tool.title, logo: tool.logo };
  });

  const components = { Control, IndicatorSeparator, Option, DropdownIndicator };

  const isDisabled =
    !selectedOptionFirst ||
    !selectedOptionSecond ||
    selectedOptionFirst?.value === selectedOptionSecond?.value;

  return (
    <Popup isOpen={props.isOpen} onClose={props.onClose}>
      <H1 className={styles.title} tag="h2">
        Can’t decide between
        <br />
        two tools?
      </H1>
      <img className={styles.image} src="/images/vs-big.svg" />
      <div className={styles.selectsRow}>
        <Select
          placeholder="Select tool"
          components={components}
          className={styles.select}
          value={selectedOptionFirst}
          onChange={handleChangeFirst}
          options={options}
        />
        <Select
          placeholder="Select tool"
          components={components}
          className={styles.select}
          value={selectedOptionSecond}
          onChange={handleChangeSecond}
          options={options}
        />
      </div>
      <div className={styles.buttonWrap}>
        <Button
          href={
            !isDisabled
              ? `/compare/${selectedOptionFirst?.value}-vs-${selectedOptionSecond?.value}`
              : null
          }
          disabled={isDisabled}
          className={styles.button}
          special="special"
        >
          Сompare →
        </Button>
      </div>
    </Popup>
  );
}
