<script>
	import PrimaryButton from "@/components/PrimaryButton.svelte";
	import Project from "@/components/Project.svelte";
	import SecondaryButton from "@/components/SecondaryButton.svelte";

</script>

<svelte:head>
	<title>Ryterm - Projects</title>
</svelte:head>

<section class="h-[80dvh] w-full flex justify-center items-center mt-20 gap-8 flex-col border-b border-b-neutral-300 dark:border-b-neutral-700">
	<div class="flex flex-col justify-center items-center text-center w-xl gap-2">
		<h2 class="font-bold text-3xl">All our <span class="font-black underline">projects</span> are here.</h2>
		<p>We don't have too much projects for now, but soon we'll have a bunch of FOSS applications <span class="font-bold underline">for you</span> :)</p>
	</div>
	<div class="p-2 border border-neutral-300 dark:border-neutral-700 rounded-xl">
		<Project name={"Kutter"} desc={"Hybrid(E2EE/TLS) chat application(under development)"}>
			{#snippet buttons()}
				<PrimaryButton label={"Website"} func={() => {window.location.href = "https://kutter.ryterm.xyz"}} --width={"100%"}></PrimaryButton>
				<SecondaryButton label={"API Repository"} func={() => {window.location.href = "https://github.com/ryterm-org/kutter_api"}} --width={"100%"}></SecondaryButton>
			{/snippet}
		</Project>
	</div>
</section>
