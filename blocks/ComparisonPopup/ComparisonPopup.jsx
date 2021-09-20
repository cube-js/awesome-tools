import React, {useState} from "react";
import dynamic from "next/dynamic";
import Select, { components } from "react-select";
import styles from "./index.module.scss";
const Popup = dynamic(() => import("../../components/Popup"));
const H1 = dynamic(() => import("../../components/Text/H1"));
const Button = dynamic(() => import("../../components/Button"));

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];



const Control = ({ children, ...props }) => {
  console.log(props)
  return (
    <components.Control {...props}>
      👍
      {children}
    </components.Control>
  );
};

export default function ComparisonPopup(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption);
  };

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
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
        <Select
          placeholder="Select tool"
          className={styles.select}
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
      </div>
      <div className={styles.buttonWrap}>
        <Button className={styles.button} special>
          Сompare →
        </Button>
      </div>
    </Popup>
  );
}
