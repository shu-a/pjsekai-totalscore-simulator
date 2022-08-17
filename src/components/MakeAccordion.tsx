import * as React from 'react';
import { InfMakePropsTitle } from '../common/common';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface InfProps extends InfMakePropsTitle {
  content: JSX.Element
}

export default function SimpleAccordion(props: InfProps) {
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
