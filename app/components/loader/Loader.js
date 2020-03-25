import React from 'react';

import './Loader.css';

export default function Loader({ label = 'Loading' }) {
	return <h3 className='loader center-text'>{label}</h3>;
}
