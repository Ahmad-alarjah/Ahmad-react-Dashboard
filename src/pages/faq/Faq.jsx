import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Stack from '@mui/material/Stack';

const Faq = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return ( <Stack spacing={2} direction="column" sx={{ width: '100%' }}>
    {Array.from({ length: 12 }, (_, i) => (
      <Accordion
        key={i}
        expanded={expanded === `panel${i + 1}`}
        onChange={handleChange(`panel${i + 1}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${i + 1}bh-content`}
          id={`panel${i + 1}bh-header`}
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            {`Section ${i + 1}`}
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            {`Description for section ${i + 1}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`This is the content of Section ${i + 1}. Modify as needed.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Stack>
);
};


export default Faq;