import { colors } from '../styles'

export default ({ children }) => {
    return <div style={{ backgroundColor: colors.container, borderRadius: 5, padding: 10, margin: 20 }}>
        {children}
    </div>
}