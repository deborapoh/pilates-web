import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker, DesktopDatePickerProps } from "@mui/x-date-pickers/DesktopDatePicker";
import { styled } from '@mui/material';

const PickerStyled = styled(DesktopDatePicker)(({ theme }) => ({
  borderRadius: 4,
  zIndex: 1,
  backgroundColor: theme.palette.common.white,
  border: 'none',
  // marginBottom: 18,
  color: theme.palette.primary.main,
  width: '100%',

  '.MuiInputLabel-root': {
    fontSize: 14,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    paddingInline: 8,
    borderRadius: 12,
  },

  "& fieldset": { border: 'none' },
}))

interface ComponentProps extends DesktopDatePickerProps<any> {}

export default function DatePicker({ ...props }: ComponentProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <PickerStyled format='DD/MM/YYYY' {...props} label={props.label} />
    </LocalizationProvider>
  );
}
