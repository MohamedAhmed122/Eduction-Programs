import { InputLabel, MenuItem, Select } from "@material-ui/core";

export default function FormSelect({ options, value, onChange, label }) {
  return (
    <>
      <InputLabel id="demo-mutiple-name-label" style={{ marginTop: "0.5rem" }}>
        {label}
      </InputLabel>
      <Select
        id="outlined-select-currency-native"
        select={"true"}
        name="category"
        value={value}
        onChange={onChange}
        style={{
          marginBottom: "1.3rem",
          width: "100%",
        }}
      >
        {options?.length > 0 &&
          options?.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
      </Select>
    </>
  );
}
