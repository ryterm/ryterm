<script>
	import PrimaryButton from "@/components/PrimaryButton.svelte";
	import Project from "@/components/Project.svelte";
</script>

<svelte:head>
	<title>Ryterm/Projects</title>
</svelte:head>

<main>
	<div>
		<h1>All our projects are here.</h1>
		<p>We don't have too much projects for now, but soon we'll have a bunch of FOSS applications <span class="font-bold underline">for you</span> :)</p>
	</div>
	<div>
		<Project name="Kutter" desc="Hybrid(E2EE/TLS) chat application(under development)">
			{#snippet buttons()}
				<PrimaryButton
					label="API Repository"
					link="https://github.com/ryterm-org/kutter_api"
				></PrimaryButton>
			{/snippet}
		</Project>
	</div>
</main>
