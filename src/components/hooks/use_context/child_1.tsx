import { useContext } from "react";
import { ThemeContext,Theme} from "./parent";

export const Child1: React.FC<{dark:Theme}> = ({dark}) => {
	const theme = useContext(ThemeContext);

	return <div style={dark?dark:theme}>Child 1</div>;
};
