import { useCallback, useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
  Slider,
} from "@mui/material";

function App() {
  const [range, setRange] = useState(8);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");
  const generator = useCallback(() => {
    let pass = "";
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (character) str += "!@$%^&*(){}";
    if (number) str += "1234567890";
    for (let i = 0; i <= range; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [range, number, character, setPassword]);
  useEffect(() => {
    generator();
  }, [range, number, character, generator]);
  return (
    <Box m={4}>
      <h1>Password Generator</h1>
      <Stack direction="row" spacing={1} mb={4}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={password}
        />
        <Button variant="contained">Copy</Button>
      </Stack>
      <Slider
        defaultValue={range}
        aria-label="Default"
        valueLabelDisplay="auto"
        style={{ width: "300px" }}
        onChange={(e) => {
          setRange(e.target.value);
        }}
      />
      <br />
      <FormControlLabel
        control={<Checkbox />}
        label="Number"
        onChange={() => {
          setNumber((prev) => !prev);
        }}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Character"
        onChange={() => setCharacter((prev) => !prev)}
      />
    </Box>
  );
}
export default App;
