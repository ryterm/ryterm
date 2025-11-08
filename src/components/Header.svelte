<script lang="ts">
	import PrimaryButton from "./PrimaryButton.svelte";
	import SecondaryButton from "./SecondaryButton.svelte";
	let { title } = $props()
</script>

<header class="fixed top-0 left-0 w-full flex justify-center items-center">
	<div class="flex justify-evenly items-center bg-white/30 dark:bg-neutral-950/30 border border-neutral-300 dark:border-neutral-700 rounded-xl w-full m-2 h-16 backdrop-blur-xl">
		<div class="font-bold text-2xl">
			{title}
		</div>
		<div class="flex justify-center items-center gap-2">
			<SecondaryButton label={"Home"} func={() => {window.location.href = "/"}}></SecondaryButton>
			<SecondaryButton label={"Projects"} func={() => {window.location.href = "/projects"}}></SecondaryButton>
			<SecondaryButton label={"Who we are"} func={() => {window.location.href = "/about"}}></SecondaryButton>
			<SecondaryButton label={"Github"} func={() => {window.location.href = "https://github.com/ryterm-org"}}></SecondaryButton>
			<PrimaryButton label={"Support us"} func={() => {window.location.href = "https://www.patreon.com/15004923/join"}}></PrimaryButton>
		</div>
	</div>
</header>
