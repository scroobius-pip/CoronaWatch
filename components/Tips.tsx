export const Tips = () => {
    return <div>
        <div style={{ display: 'flex', margin: 'auto', width: 100 }}>
            <img src={require('../assets/info.svg')} style={{ marginRight: 10 }} />
            <h3 style={{ opacity: 0.8 }}>Tips</h3>
        </div>
        <ul style={{ lineHeight: '2em', fontWeight: 400, fontSize: 20 }}>
            <li>Wash your hands often with soap and water for at least 20 seconds. Use an alcohol-based hand sanitizer that contains at least 60% alcohol if soap and water are not available.
    </li>
            <li>Avoid touching your eyes, nose, and mouth with unwashed hands.
    </li>
            <li>Avoid close contact with people who are sick.</li>
            <li>Stay home when you are sick.</li>
            <li>Cover your cough or sneeze with a tissue, then throw the tissue in the trash.</li>
            <li>Clean and disinfect frequently touched objects and surfaces.</li>

        </ul>
        <style jsx>
            {`
            li {
                opacity:0.4;
                transition:0.3s;
            }

            li:hover {
                opacity:1;
            }
            `}
        </style>
        <p style={{ textAlign: 'right' }}> source - www.cdc.gov</p>
    </div>;
};
