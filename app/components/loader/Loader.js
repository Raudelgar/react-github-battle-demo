import React from 'react';

export default function Loader({ label = 'Loading' }) {
	return <h3 className='loader center-text'>{label}</h3>;
}
