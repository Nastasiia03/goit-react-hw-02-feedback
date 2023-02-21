export const FeedbackOptions = ({options, onLeaveFeedback, index}) => {
    return options.map(option => (
        <button key={index} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
    ))
}

