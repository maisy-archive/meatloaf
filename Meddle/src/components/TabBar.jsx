import { FormText, FormDivider } from "../WPMODULES";

// Component taken from Yellowsink's Cumstain, cheers!

export default ({ items }) => {
	let [current, goTo] = React.useState(0);

	return (
		<div className="beef-meddle-settings-section">
			<div className="beef-meddle-tabbar">
				{items.map((e, i) => (
					<button
						className={
							"beef-meddle-button" +
							(i === current ? " beef-meddle-selected" : "")
						}
						onClick={() => goTo(i)}
					>
						<FormText>{e.text}</FormText>
					</button>
				))}
			</div>

			<FormDivider className="beef-meddle-settings-divider" />

			<div className="beef-meddle-tabbar-content">
				{React.createElement(items[current].component, { goTo })}
			</div>
		</div>
	);
};