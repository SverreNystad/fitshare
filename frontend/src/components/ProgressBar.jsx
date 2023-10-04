import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedExample({ current }) {
	return <ProgressBar animated now={current} />;
}

export default AnimatedExample;