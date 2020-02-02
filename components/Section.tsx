import { colors } from '../styles'

export default ({ children }) => {
    return <div style={{ width: '100%', height: '100%', backgroundColor: colors.container, borderRadius: 5, padding: 10, margin: 20 }}>
        {children}
    </div>
}