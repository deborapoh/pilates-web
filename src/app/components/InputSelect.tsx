import { Box, FormControl, InputLabel, MenuItem, Select, styled } from "@mui/material"
import { FunctionComponent, forwardRef } from "react"

const Label = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 14,
}))

const SelectStyled = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,

  "& fieldset": { border: 'none' },
}))

interface SelectProps {
  gap?: number
  label: string
  onChange: any
  options: any
  value: any
}

const InputSelect = ({ gap = 18, label, onChange, options, value }: SelectProps) => {
  return (
    <FormControl fullWidth>
      <Label id="has-done-pilates">{label}</Label>
      <SelectStyled
        labelId={label.toLowerCase().replaceAll(' ', '')}
        id={label.toLowerCase().replaceAll(' ', '')}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options?.map((o: any) => (
          <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
        ))}
      </SelectStyled>
      <Box sx={{ height: gap }} />
    </FormControl>
  )
};

export default forwardRef(InputSelect)
