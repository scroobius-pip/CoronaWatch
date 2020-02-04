import Link from 'next/link';
export const GoBackButton = () => {
    return <Link href='/'>


        <div className='country-button' style={{
            display: 'flex',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            borderRadius: '2em'
        }}>
            <img style={{ transform: 'rotate(180deg)' }} src={require('../assets/arrow.svg')} />
            <span style={{ marginLeft: 10 }}>Go Back</span>
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
