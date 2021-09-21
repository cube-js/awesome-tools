import React, {useState} from "react";
import dynamic from "next/dynamic";
import Select, { components } from "react-select";
import styles from "./index.module.scss";
const Popup = dynamic(() => import("../../components/Popup"));
const H1 = dynamic(() => import("../../components/Text/H1"));
const Button = dynamic(() => import("../../components/Button"));

const Control = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      👍
      {children}
    </components.Control>
  );
};

export default function ComparisonPopup(props) {
  const {tools} = props
  const [selectedOptionFirst, setSelectedOptionFirst] = useState(null);
  const [selectedOptionSecond, setSelectedOptionSecond] = useState(null);

  const handleChangeFirst = (selectedOption) => {
    setSelectedOptionFirst(selectedOption);
  };
  const handleChangeSecond = (selectedOption) => {
    console.log(selectedOption)
    setSelectedOptionSecond(selectedOption);
  };
  const options = tools.map(tool => {
    return ({ value: tool.id, label: tool.title })
  })
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
          components={{ Control }}
          className={styles.select}
          value={selectedOptionFirst}
          onChange={handleChangeFirst}
          options={options}
        />
        <Select
          placeholder="Select tool"
          className={styles.select}
          value={selectedOptionSecond}
          onChange={handleChangeSecond}
          options={options}
        />
      </div>
      <div className={styles.buttonWrap}>
        <Button
          href={!isDisabled ? `/compare/${selectedOptionFirst?.value}-vs-${selectedOptionSecond?.value}` : null}
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
