import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem } from '@mui/material';

const urgencies = ['Low', 'Medium', 'High'];

const ITSMRequestForm = ({ addRequest }) => {
  const formik = useFormik({
    initialValues: {
      subject: '',
      description: '',
      urgency: '',
      caller: '',
    },
    validationSchema: Yup.object({
      subject: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      urgency: Yup.string().required('Required'),
      caller: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addRequest(values);
      resetForm();
      alert(`Request Created:\\n${JSON.stringify(values, null, 2)}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <TextField
          fullWidth
          id="subject"
          name="subject"
          label="Subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          multiline
          rows={4}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          fullWidth
          id="urgency"
          name="urgency"
          label="Urgency"
          select
          value={formik.values.urgency}
          onChange={formik.handleChange}
          error={formik.touched.urgency && Boolean(formik.errors.urgency)}
          helperText={formik.touched.urgency && formik.errors.urgency}
          margin="normal"
        >
          {urgencies.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          fullWidth
          id="caller"
          name="caller"
          label="Caller"
          value={formik.values.caller}
          onChange={formik.handleChange}
          error={formik.touched.caller && Boolean(formik.errors.caller)}
          helperText={formik.touched.caller && formik.errors.caller}
          margin="normal"
        />
      </div>
      <div>
        <Button color="primary" variant="contained" type="submit" style={{ marginTop: '16px' }}>
          Create Request
        </Button>
      </div>
    </form>
  );
};

export default ITSMRequestForm;