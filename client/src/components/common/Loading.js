// component
const Loading = props => (
    <p style={{ color : 'gray'}}>{ props.message ? props.message : 'Loading...' }</p>
)

export default Loading