const TextInput = ({ value, onChangeText, onPressEnter }) => (
    <input type="text" value={value} onChange={e => onChangeText(e.target.value)} onKeyPress={e => e.key === 'Enter' && onPressEnter(e)} placeholder="Search by title" style={{width: '200px',height: '22px'}}/>
)

export default TextInput