<script>
	import PrimaryButton from "./PrimaryButton.svelte";
	import SecondaryButton from "./SecondaryButton.svelte";

</script>

<header>
	<SecondaryButton
		label="Home"
		link="/"
	></SecondaryButton>
	<SecondaryButton
		label="Projects"
		link="/projects"
	></SecondaryButton>
	<SecondaryButton
		label="About"
		link="/about"
	></SecondaryButton>
	<SecondaryButton
		label="Github"
		link="https://github.com/ryterm-org"
	></SecondaryButton>
	<PrimaryButton
		label="Support us"
		link="https://www.patreon.com/15004923/join"
	></PrimaryButton>
</header>

<style>
	header {
		padding: 5px;
	}
</style>
