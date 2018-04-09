import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';


const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function QuestionPanel(props) {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={null}>
                <Typography className={null}>{props.question}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {props.answer}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default QuestionPanel;