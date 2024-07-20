import { Button, TextField, FormGroup } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const AddGigForm = () => {
  return (
    <FormGroup>
      <h2>Add gig</h2>
      <DatePicker label="Date" />
      <TextField id="outlined-basic" label="Band name" variant="outlined" />
      <TextField id="outlined-basic" label="Venue" variant="outlined"/>
      <Button>Add</Button>
    </FormGroup>
  )
}