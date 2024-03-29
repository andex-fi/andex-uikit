import React, { useState } from "react";
import Box from "../Box/Box";
import BalanceInput from "./BalanceInput";
import TextFieldComp from "./TextField";

export default {
  title: "Components/BalanceInput",
  component: BalanceInput,
  argTypes: {},
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  const [decimalValue, setDecimalValue] = useState(1.43333);
  const [numericValue, setNumericValue] = useState(5);

  const currencyValue = (input: number) => {
    return `~${(input * 1.3).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} USD`;
  };

  const handleDecimalChange = (input) => {
    setDecimalValue(input);
  };

  const handleNumericChange = (input) => {
    setNumericValue(input);
  };

  return (
    <Box width="300px">
      <BalanceInput
        onUserInput={handleDecimalChange}
        value={decimalValue}
        currencyValue={currencyValue(decimalValue)}
        placeholder="0.0"
        mb="32px"
      />
      <BalanceInput
        value={decimalValue * 1.5}
        onUserInput={handleDecimalChange}
        currencyValue={currencyValue(decimalValue * 1.5)}
        placeholder="1.5"
        isWarning
        mb="32px"
      />
      <BalanceInput
        value={numericValue}
        onUserInput={handleNumericChange}
        inputProps={{ inputMode: "numeric" }}
        currencyValue={currencyValue(numericValue)}
        placeholder="0"
        mb="32px"
      />
    </Box>
  );
};

export const UnitDisplay: React.FC<React.PropsWithChildren> = () => {
  const ANDX_PRICE = 69;
  const [andxValue, setAndxValue] = useState("1006.086956");

  const andxToUSD = (input: string) => {
    const convertedToUSD = parseFloat(input) * ANDX_PRICE;
    return `~${convertedToUSD.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} USD`;
  };

  const handleAndxChange = (input: string) => {
    setAndxValue(input);
  };

  return (
    <>
      <Box width="300px" mb="24px">
        <BalanceInput
          onUserInput={handleAndxChange}
          value={andxValue}
          currencyValue={andxToUSD(andxValue)}
          placeholder="0.0"
          unit="ANDX"
        />
      </Box>
      {/* Long token names with spaces */}
      <Box width="300px">
        <BalanceInput
          onUserInput={handleAndxChange}
          value={andxValue}
          currencyValue="2854.66 ETH-VENOM LP"
          placeholder="0.0"
          unit="ANDX-VENOM LP"
        />
      </Box>
    </>
  );
};

export const SwitchUnits: React.FC<React.PropsWithChildren> = () => {
  const ANDX_PRICE = 69;
  const [editingUnit, setEditingUnit] = useState<"ANDX" | "USD">("ANDX");
  const conversionUnit = editingUnit === "ANDX" ? "USD" : "ANDX";
  const [values, setValues] = useState({
    ANDX: "1006.086957",
    USD: `${1006.086957 * ANDX_PRICE}`,
  });

  const currencyValue = !Number.isNaN(parseFloat(values[conversionUnit]))
    ? parseFloat(values[conversionUnit]).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0.00";

  const switchEditingUnits = () => {
    const editingUnitAfterChange = editingUnit === "ANDX" ? "USD" : "ANDX";
    // This is needed to persist same value as shown for currencyValue after switching
    // otherwise user will see lots of decimals
    const valuesAfterChange = { ...values };
    valuesAfterChange[editingUnitAfterChange] = !Number.isNaN(parseFloat(values[conversionUnit]))
      ? parseFloat(values[conversionUnit]).toFixed(2)
      : "0.00";
    setValues(valuesAfterChange);
    setEditingUnit(editingUnitAfterChange);
  };

  const handleAndxChange = (input: string) => {
    const inputAsFloat = parseFloat(input);
    if (editingUnit === "ANDX") {
      setValues({
        ANDX: input,
        USD: Number.isNaN(inputAsFloat) ? "" : `${inputAsFloat * ANDX_PRICE}`,
      });
    } else {
      setValues({
        ANDX: Number.isNaN(inputAsFloat) ? "" : `${inputAsFloat / ANDX_PRICE}`,
        USD: input,
      });
    }
  };

  return (
    <Box width="300px">
      <BalanceInput
        onUserInput={handleAndxChange}
        value={values[editingUnit]}
        currencyValue={`~${currencyValue} ${conversionUnit}`}
        placeholder="0.0"
        unit={editingUnit}
        isWarning={!values[editingUnit] || parseFloat(values[editingUnit]) <= 0}
        switchEditingUnits={switchEditingUnits}
      />
    </Box>
  );
};

export const Textfield: React.FC<React.PropsWithChildren> = () => {
  const [value, setValue] = useState("");

  return (
    <Box width="300px">
      <TextFieldComp label="Label" value={value} placeholder="Placeholder" onUserInput={setValue} />
    </Box>
  );
};
