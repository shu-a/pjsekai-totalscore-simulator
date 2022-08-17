import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  sx: any
  id: string | number
  title: string
  content: JSX.Element
}

export default function SimpleAccordion(props: Props) {
  let propsId = String(props.id);
  return (
    <React.Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}
          aria-controls={propsId}
          // id={propsId}
          sx={{
            backgroundColor: '#00b3a4',
            color: '#ffffff'
          }}
        >
          <Typography sx={props.sx}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#fffff7' }}>
          {/* <Typography> */}
            {props.content}
          {/* </Typography> */}
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}
