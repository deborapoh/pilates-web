import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as Picker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { styled } from '@mui/material';

const PickerStyled = styled(DesktopDatePicker)(({ theme }) => ({
  borderRadius: 4,
  zIndex: 1,
  backgroundColor: theme.palette.common.white,
  border: 'none',
  marginBottom: 18,
  color: theme.palette.primary.main,

  '.MuiInputLabel-root': {
    fontSize: 18,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    paddingInline: 8,
    borderRadius: 12,
  },

  "& fieldset": { border: 'none' },
}))

export default function DatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <PickerStyled label="Data de Nascimento" />
    </LocalizationProvider>
  );
}
