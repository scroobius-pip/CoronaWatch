import Link from 'next/link';
export const LinkButton = ({ href = '/', text = '' }) => {
    return <Link href={href}>


        <div className='country-button' style={{
            display: 'flex',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            // width: 200,
            borderRadius: '2em'
        }}>
            <span>{text}</span>
            <img style={{ marginLeft: 10 }} src={require('../assets/arrow.svg')} />
            <style jsx>
                {`
.country-button {
    transition:all 0.2s;
    cursor:pointer;
}

.country-button:hover {
    background-color: rgba(255,255,255,0.1);
}
`}
            </style>
        </div>
    </Link>;
};
