import { useContext } from "react";
import {Theme,ThemeContext} from './parent'

export const Child2: React.FC<{ dark:Theme }> = ({ dark }) => {
	const theme = useContext(ThemeContext);

	return <div style={dark?dark:theme}>Child 2</div>;
};
